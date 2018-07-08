const Ticket = require('../models/Ticket');

const read = async (req, res) => {
  const tickets = await Ticket.find({});
  return res.json(tickets);
};

const remove = async (req, res) => {
  await Ticket.findOneAndDelete({ _id: req.params.id });
  return res.json('Ticket removed!');
};

const update = async (req, res) => {
  await Ticket.findOneAndUpdate({ _id: req.params.id }, req.body);
  return res.json('Ticket updated!');
};

const create = async (req, res) => {
  const ticket = new Ticket({
    name: req.body.name,
    price: parseInt(req.body.price)
  });
  await ticket.save();
  return res.json('Ticket created!');
};

module.exports = {
  read,
  create,
  remove,
  update
};
