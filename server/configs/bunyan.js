import path from 'path';

const serverRoot = process.env.SERVER_ROOT || './';
const name = process.env.APP_NAME || 'name';

module.exports = {
  name,
  streams: [
    {
      level: 'debug',
      stream: process.stdout // log INFO and above to stdout
    },
    {
      level: 'info',
      path: path.join(serverRoot, 'logs/app.json') // log ERROR and above to a file
    }
  ]
};
