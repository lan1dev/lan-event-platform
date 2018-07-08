const Ticket = require('../models/Ticket');

const read = async (req, res) => {
  const result = await Ticket.find({});
  return result;
};

const remove = async (req, res) => {
  await Ticket.findOneAndDelete(req.body.id);
  return res.json('Ticket removed!');
};

const edit = async (req, res) => {
  await Ticket.findOneAndUpdate(req.body.id, req.body);
  return res.json('Ticket updated!');
};

const create = async (req, res) => {
  const ticket = new Ticket({
    name: req.body.name,
    price: req.body.price
  });
  await ticket.save();
  return res.json('Ticket created!');
};
