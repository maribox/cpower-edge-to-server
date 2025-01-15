import createClient from "openapi-fetch"
import type { paths, components } from "../schema"
import { z } from 'zod';

const envSchema = z.object({
  REMOTE_SERVER_URL: z.union([z.string().ip(), z.string().url()]),
  USER_ID: z.string().uuid(),
  INVERTER_ADDRESS: z.union([z.string().ip(), z.string().url()]),
  INTERVAL: z.string().pipe(z.coerce.number()),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error.format());
  process.exit(1);
}

const { REMOTE_SERVER_URL, USER_ID, INVERTER_ADDRESS, INTERVAL } = parsedEnv.data;

const client = createClient<paths>({ baseUrl: `http://${INVERTER_ADDRESS}` });

async function fetchAndForward() {
  try {
    const {
      data, 
      error,
    } = await client.GET("/solar_api/v1/GetMeterRealtimeData.cgi", {
      params: {
        "query": { "Scope": "System"},
      },
    });
    if (error) {
      throw new Error(`Failed to fetch from ${INVERTER_ADDRESS}: ${JSON.stringify(error)}`);
    }
    
    console.log("Fetched data:", data.Body.Data);
    let powerInWattsIntoHome = Number(data.Body.Data["0"]!!.PowerReal_P_Sum)
    
    let body = JSON.stringify({
      "power_in_w" : -powerInWattsIntoHome,
      "user_id": USER_ID,
    })

    const postResponse = await fetch(REMOTE_SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    if (!postResponse.ok) {
      throw new Error(`Failed to forward data: ${postResponse.statusText}`);
    }

    console.log("Data forwarded successfully.");
  } catch (error) {
    console.error("Error fetching or forwarding data:", error);
  }
}
setInterval(fetchAndForward, INTERVAL);
fetchAndForward();
