Made for the cpower project to move data from bitshake Smart Meter Reader to InfluxDB





1. docker exec cpower-tasmota-to-influx-influxdb-1 influx auth create --org org --operator

2. docker exec cpower-tasmota-to-influx-influxdb-1 influx auth list -> copy new operator token, save somewhere (e.g. password manager)

3. remove old operator token from list (e.g. in UI)

4. docker exec cpower-tasmota-to-influx-influxdb-1 influx config set -n default -t <operator-token>

5. create new r and w tokens

create a user:

1. ```sh
   influx user create \
     --org ORG_NAME \
     --name USER_NAME \
     --password USER_PASSWORD
   ```