#!/bin/bash

if ! docker images | grep -q "vzlogger"; then
  echo "Loading vzlogger image from vzlogger.tar..."
  docker load < vzlogger.tar
fi

#docker compose -f ./docker-compose.yml -f ./influx-bridge/telegraf/docker-compose.yml up -d

docker compose up -d  && pushd ./data-bridge && docker compose up -d && popd && pushd ./influx-bridge/telegraf && docker compose up -d && popd