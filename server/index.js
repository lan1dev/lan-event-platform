require('dotenv').config();
const express = require('express');
const bunyan = require('bunyan');
const bunyanConfig = require('./configs/bunyan');
const db = require('./models');


// Set port, init express
const port = process.env.PORT || 8080;
const app = express();

//Allows CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Init bunyan logger
const log = bunyan.createLogger(bunyanConfig);
