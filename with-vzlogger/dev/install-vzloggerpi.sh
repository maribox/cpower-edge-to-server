# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
sudo apt-get install uuid-runtime -y

sudo docker run hello-world

git clone https://github.com/maribox/cpower-edge-to-server.git
cd ./cpower-edge-to-server/with-vzlogger/dev/

sudo groupadd docker || true
sudo usermod -aG docker $USER

sudo docker load -i ./vzlogger.tar # because newgrp would stop script
UUID=$(uuidgen)
cat << EOF > .env
REMOTE_SERVER_URL=<URL>
USER_ID=$UUID
EOF

sudo docker compose up -d
sudo docker ps -a

echo "========================================"
echo "Set user id: $UUID"
echo "========================================"