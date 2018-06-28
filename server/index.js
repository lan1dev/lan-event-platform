require('dotenv').config();
const express = require('express');

// Set port, init express
const port = process.env.PORT || 8080;
const app = express();
