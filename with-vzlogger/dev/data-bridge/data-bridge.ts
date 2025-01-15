const REMOTE_SERVER_URL = Deno.env.get("REMOTE_SERVER_URL") || "http://fed.local:3000";
const VZLOGGER_URL = Deno.env.get("VZLOGGER_URL") || "http://vzlogger:8081";
const INTERVAL = parseInt(Deno.env.get("INTERVAL") || "60000", 10);
const USER_ID = Deno.env.get("USER_ID");
const POWER_UUID = Deno.env.get("POWER_UUID");
const REMOTE_ENDPOINT = `${REMOTE_SERVER_URL}/api/power`

async function fetchAndForward() {
  try {
    const response = await fetch(VZLOGGER_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${VZLOGGER_URL}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    let powerInWatts = -data.data.find(entry => entry.uuid === POWER_UUID)["tuples"][0][1];
    
    if (!powerInWatts) {
      throw new Error("Didn't get power from Smart Meter. Was the PIN entered already?")
    }

    let body = JSON.stringify({
      "power_in_w" : powerInWatts,
      "user_id": USER_ID,
    })
    
    console.log(`Sending POST request ${body} to ${REMOTE_ENDPOINT}`);

    const postResponse = await fetch(REMOTE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    if (!postResponse.ok) {
      throw new Error(`Failed to forward data: ${postResponse.statusText}`);
    }

    console.log(`Data forwarded successfully to endpoint ${REMOTE_ENDPOINT}.`);
  } catch (error) {
    console.error(`Error fetching or forwarding data to endpoint ${REMOTE_ENDPOINT}:`, error);
  }
}

setInterval(fetchAndForward, INTERVAL);
fetchAndForward();
