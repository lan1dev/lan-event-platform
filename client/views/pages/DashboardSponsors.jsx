import React from 'react';
import Button from '../common/Button';
import DashboardBase from './DashboardBase';
import Title from '../common/Title';
import Modal from '../common/Modal';

// Temp Mock data
const sponsors = ['Sponsor nr1', 'Sponsor nr2'];

/**
 * DashboardPage for the /dashboard route
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
