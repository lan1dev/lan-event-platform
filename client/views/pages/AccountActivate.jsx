import React from 'react';
import DashboardBase from './DashboardBase';
import Modal from '../common/Modal';

/**
 * DashboardPage for the /dashboard route
 */
const ActivatePage = () => (
    <Title>Ditt konto är nu aktiverat!</Title>
    <Modal background="lightgray">
        <Button>Create Ticket</Button>
    </Modal>
   
);
export default ActivatePage;
