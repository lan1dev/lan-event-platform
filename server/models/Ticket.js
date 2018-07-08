const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
