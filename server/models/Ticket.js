import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
