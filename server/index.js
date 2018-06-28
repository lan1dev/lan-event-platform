require('dotenv').config();
const express = require('express');
const bunyan = require('bunyan');
const passport = require('passport');
const memwatch = require('memwatch-next');
const compression = require('compression');
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
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

const errorHandler = error => {
  log.error(error);
};

db.connect(process.env.MONGODB_URI, errorHandler);

// Init passport
app.use(passport.initialize());
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// Watch for memory leaks, log leaks as fatal
memwatch.on('leak', info => {
  log.fatal('Memory leak detected:', info);
});

// Compress responses
app.use(compression());
