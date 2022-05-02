# Proof Of Concept for XYZ
Basic setup using Node.js, Express and Docker.

## Run
1. Clone this repo
2. Install deps: `npm i`
3. Build image: `docker build -t poc-image .`
4. Run image: `docker run -p 3000:3000 -d --name poc poc-image:latest`
5. Go to http://localhost:3000

## Other docker commands
- Show running containers: `docker ps`
- Show app logs: `docker logs poc`
- Stop app: `docker rm -f poc`

