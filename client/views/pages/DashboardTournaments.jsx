import React from 'react';
import Button from '../components/Button';
import DashboardBase from './DashboardBase';
import Title from '../components/Title';
import Modal from '../components/Modal';

// Temp Mock data
const tournaments = ['Turnering nr1', 'Turnering nr2'];

/**
 * DashboardPage for the /dashboard route
 */
const DashboardTournaments = () => (
  <DashboardBase>
    <Title>Tournaments</Title>
    <Modal background="lightgray">
      <Button>Create Tournaments</Button>
      <ul>{tournaments.map(tournament => <li>{tournament}</li>)}</ul>
    </Modal>
  </DashboardBase>
);

export default DashboardTournaments;
