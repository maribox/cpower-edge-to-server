#!/bin/bash

if ! docker images | grep -q "vzlogger"; then
  echo "Loading vzlogger image from vzlogger.tar..."
  docker load < vzlogger.tar
fi

docker compose up -d
