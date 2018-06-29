## Start both frontend & backend

Start docker:

`docker-compose up -d`

Site available (after a minute or two) at:

`http://localhost:3000`

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
