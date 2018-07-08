import mongoose from 'mongoose';

export const connect = (uri, errorHandler) => {
  mongoose.connect(uri);

  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', err => {
    errorHandler(`Mongoose connection error ${err}`);
  });
};

export const disconnect = done => {
  mongoose.disconnect(done);
};

export default connect;
