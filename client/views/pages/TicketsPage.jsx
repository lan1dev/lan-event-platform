import React from 'react';
import Button from '../common/Button';
import DashboardBase from './DashboardBase';
import Title from '../common/Title';
import Modal from '../common/Modal';

// Temp Mock data
const tickets = ['Under 20 år', 'Över 20 år'];

/**
 * DashboardPage for the /dashboard route
 */
const TicketsPage = () => (
  <DashboardBase>
    <Title>Tickets</Title>
    <Modal background="lightgray">
      <Button>Create Ticket</Button>
      <ul>{tickets.map(ticket => <li>{ticket}</li>)}</ul>
    </Modal>
  </DashboardBase>
);

export default TicketsPage;
