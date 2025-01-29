import createClient from "openapi-fetch"
import type { paths, components } from "../schema"
import { z } from 'zod'
import { InfluxDB, Point } from '@influxdata/influxdb-client'

const envSchema = z.object({
  REMOTE_SERVER_URL: z.union([z.string().ip(), z.string().url()]),
  USER_ID: z.string().uuid(),
  INVERTER_ADDRESS: z.union([z.string().ip(), z.string().url()]),
  INTERVAL: z.string().pipe(z.coerce.number()),
  INFLUXDB_URL: z.string().url(),
  INFLUXDB_TOKEN: z.string(),
  INFLUXDB_ORG: z.string().default("org"),
  USER_ID_BUYER: z.string().uuid()//.optional(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error.format())
  process.exit(1)
}

const {
  REMOTE_SERVER_URL,
  USER_ID,
  INVERTER_ADDRESS,
  INTERVAL,
  INFLUXDB_URL,
  INFLUXDB_TOKEN,
  INFLUXDB_ORG,
  USER_ID_BUYER
} = parsedEnv.data

const influxDBClient = new InfluxDB({
  url: INFLUXDB_URL,
  token: INFLUXDB_TOKEN
})

const writeApi = influxDBClient.getWriteApi(
  INFLUXDB_ORG,
  `energy_${USER_ID}`,
  'ns'
)

const client = createClient<paths>({ baseUrl: `http://${INVERTER_ADDRESS}` })
const REMOTE_ENDPOINT = `${REMOTE_SERVER_URL}/api/power`

async function fetchAndForward() {
  try {
    const { data, error } = await client.GET("/solar_api/v1/GetPowerFlowRealtimeData.fcgi")
    const { data: meterData, error: meterError } = await client.GET("/solar_api/v1/GetMeterRealtimeData.cgi", {
      params: {
        query: {
          Scope: "System",
        },
      },
    });


    if (error || meterError) {
      throw new Error(`Failed to fetch from ${INVERTER_ADDRESS}: ${JSON.stringify(error)}`)
    }

    console.log("Fetched data:", data.Body.Data)
    console.log("Fetched meterData:", meterData.Body.Data)

    const powerLoad = Number(data.Body.Data.Site.P_Load)
    const fromGrid = Number(data.Body.Data.Site.P_Grid)
    const fromPV = Number(data.Body.Data.Site.P_PV)

    console.log(`${powerLoad}, ${fromGrid}, ${fromPV}`);

    await pushToInflux(meterData, fromGrid)

    //simulation for winter so that it gives better results
    await pushToCpower(fromPV*3, USER_ID)

    if (USER_ID_BUYER) {
      await pushToCpower(-powerLoad, USER_ID_BUYER)
    }
    console.log("Data forwarded successfully.")
  } catch (error) {
    console.error("Error fetching or forwarding data:", error)
  }
}

setInterval(fetchAndForward, INTERVAL)
fetchAndForward()

process.on('SIGINT', async () => {
  console.log("Closing InfluxDB connection...")
  await writeApi.close()
  process.exit()
})

async function pushToInflux(meterData: { Body: { Data: components["schemas"]["T_MeterRealtimeData"] }; Head: { RequestArguments?: { Scope?: string; DeviceId?: string }; Status: { Code: number; Reason?: string; UserMessage?: string }; TimeStamp: string } }, power: number) {
  let point
  try {
    const e_in = Number(meterData.Body.Data["0"]?.EnergyReal_WAC_Sum_Consumed)
    const e_out = Number(meterData.Body.Data["0"]?.EnergyReal_WAC_Sum_Produced)

    point = new Point('energy')
      .tag('user_id', USER_ID)
      .floatField('Power', power)
      .floatField('E_in', e_in)
      .floatField('E_out', e_out)
      .timestamp(new Date())

  } catch (error) {
    console.log("Couldn't get E_in/E_out")
    point = new Point('energy')
      .tag('user_id', USER_ID)
      .floatField('Power', power)
      .timestamp(new Date())
  }

  writeApi.writePoint(point)
  await writeApi.flush()
  console.log('Data written to InfluxDB')
}

async function pushToCpower(power_in_w: number, user_id: string) {
  const body = JSON.stringify({
    "power_in_w": power_in_w,
    "user_id": user_id,
  })
  console.log(`Sending POST request ${body} to ${REMOTE_ENDPOINT}`)
  const postResponse = await fetch(REMOTE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  })

  if (!postResponse.ok) {
    throw new Error(`Failed to forward data: ${postResponse.statusText}`)
  }
}
