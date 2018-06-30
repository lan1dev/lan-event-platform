## Start both frontend & backend

Start all docker containers (in a separate terminal window):

`docker-compose up`

Site available (after a minute or two) at:

`http://localhost:3000`

Press `Ctrl+C` to stop all containers.

Alternatively, run `docker-compose up -d` for detached mode (don't show logs). To stop them, run `docker-compose down`.

### Useful docker commands

|command|effect|
|-------|------|
|`docker ps`|View all running docker containers|
|`docker logs $container_name`|View container logs (use `docker ps` to see container names)|  
|`docker restart $container_name`|Restart single container|  
|`docker exec -it $container_name /bin/ash`|Enter container|  

The following commands must be run in the lan-event-platform root directory:

|command|effect|
|-------|------|
|`docker-compose down`|Stop all running containers|
|`docker-compose restart`|Restart all running containers|
|`docker-compose build`|Rebuild containers (hopefully won't be necessary!)|

## Start backend only

Start docker with the alternative docker-compose file:

`docker-compose up -f docker-compose.backend-only.yml -d`

## Start frontend only (API against docker)

Go to folder:

`cd client`

Install dependencies:

`npm install` or `yarn`

Start Front-end Dev-server:

`npm run startDev` or `yarn startDev`

## Start the frontend only (API against staging)

Go to folder:

`cd client`

Install dependencies:

`npm install` or `yarn`

Start Front-end Dev-server:

`npm start` or `yarn start`

## Run Front-end tests

Go to folder:

`cd client`

Run test coverage:

`npm run testcoverage`

Run tests:

`npm tests`
