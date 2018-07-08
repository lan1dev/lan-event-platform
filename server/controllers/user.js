import User from '../models/User';

export const findOne = (req, res) => {
  User.findOne({ username: req.params.username }, (error, result) => {
    res.json(result);
  });
};

export const create = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save(error => {
    console.log(error);
  });

  res.json('User created');
};
