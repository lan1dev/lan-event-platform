import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import PassportLocal from 'passport-local';
import localLoginConfig from '../configs/local-login';

const User = mongoose.model('User');

const authenticate = (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) {
        return done(err);
      }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id, // eslint-disable-line no-underscore-dangle
        username: user.profile.name
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  });
};

export default new PassportLocal.Strategy(localLoginConfig, authenticate);
