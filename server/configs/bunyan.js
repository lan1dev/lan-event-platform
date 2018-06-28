import path from 'path';

module.exports = {
  name: process.env.APP_NAME,
  streams: [
    {
      level: 'debug',
      stream: process.stdout // log INFO and above to stdout
    },
    {
      level: 'info',
      path: path.join(process.env.SERVER_ROOT, '/logs/app.json') // log ERROR and above to a file
    }
  ]
};
