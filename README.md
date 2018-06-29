## Start both Front-end & Back-end environments

Start docker:

`docker-compose up -d`

Site available at:

`http://localhost:3000`

## if you whish to Start the Back-end environment only

Go to folder:

`cd server`

Start docker:

`docker-compose up -d`

## if you wish to start the Front-end environment (API against docker)

Go to folder:

`cd client`

Install dependencies:

`npm install`

Start Front-end Dev-server:

`npm run startDev`

## if you wish to start the Front-end environment (API against staging)

Go to folder:

`cd client`

Install dependencies:

`npm install`

Start Front-end Dev-server:

`npm start`
