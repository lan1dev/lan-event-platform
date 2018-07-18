import React from 'react';
import DashboardBase from './DashboardBase';
import Title from '../components/Title';
import Icon from '../components/Icon';
import FlexBox from '../components/FlexBox';
/**
 * DashboardPage for the /dashboard/sponsors route
 */
const DashboardQRScanner = () => (
  <DashboardBase>
    <Title>QR Scanner</Title>
    <FlexBox align="center" justify="center">
      <Icon type="camera fa-5x" />
    </FlexBox>
  </DashboardBase>
);

export default DashboardQRScanner;
