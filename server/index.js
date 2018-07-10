import dotenv from 'dotenv';
import express from 'express';
import bunyan from 'bunyan';
import passport from 'passport';
import memwatch from 'memwatch-next';
import compression from 'compression';
import bodyParser from 'body-parser';
import localSignupStrategy from './passport/local-signup';
import localLoginStrategy from './passport/local-login';
import bunyanConfig from './configs/bunyan';
import connect from './models';
import routes from './routes';

dotenv.config({ path: '/env' });

// Set port, init express
const port = process.env.PORT || 8080;
const app = express();

// Allows CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Init bunyan logger
const log = bunyan.createLogger(bunyanConfig);

const errorHandler = error => {
  log.error(error);
};

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/app';

connect(
  mongoURI,
  errorHandler
);

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

// Add routes
app.use('/', routes);

// Start application
app.listen(port, () => {
  console.log(`${process.env.APP_NAME} listening on port ${port}`);
});

export default app;
