const REMOTE_SERVER_URL = Deno.env.get("REMOTE_SERVER_URL") || "https://webhook.site/ae6c926c-5a74-44de-8b11-3e95aa68b3ee";
const VZLOGGER_URL = Deno.env.get("VZLOGGER_URL") || "http://vzlogger:8081";
const INTERVAL = parseInt(Deno.env.get("INTERVAL") || "60000", 10);
const USER_ID = Deno.env.get("USER_ID");
const POWER_UUID = Deno.env.get("POWER_UUID");

async function fetchAndForward() {
  try {
    const response = await fetch(VZLOGGER_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${VZLOGGER_URL}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    let powerInWatts = data.data.find(entry => entry.uuid === POWER_UUID);
    
    let body = JSON.stringify({
      "power_in_w" : powerInWatts,
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
