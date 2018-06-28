require('dotenv').config();
const express = require('express');

// Set port, init express
const port = process.env.PORT || 8080;
const app = express();

//Allows CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
