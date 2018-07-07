import React from 'react';
import Button from '../components/Button';
import DashboardBase from './DashboardBase';
import Title from '../components/Title';
import Modal from '../components/Modal';

// Temp Mock data
const sponsors = ['Sponsor nr1', 'Sponsor nr2'];

/**
 * DashboardPage for the /dashboard/sponsors route
 */
const DashboardSponsors = () => (
  <DashboardBase>
    <Title>Sponsors</Title>
    <Modal background="lightgray">
      <Button>Create Sponsor</Button>
      <ul>{sponsors.map(sponsor => <li>{sponsor}</li>)}</ul>
    </Modal>
  </DashboardBase>
);

export default DashboardSponsors;
