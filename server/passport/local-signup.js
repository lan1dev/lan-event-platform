// const User = require('mongoose').model('User');
import PassportLocal from 'passport-local';
import User from '../models/User';
import localSignupConfig from '../configs/local-signup';

const register = (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    profile: {
      name: req.body.name.trim()
    }
  };

  const user = new User(userData);
  user.save(err => {
    if (err) return done(err);

    return done(null);
  });
};

export default new PassportLocal.Strategy(localSignupConfig, register);
