import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import FlexBox from '../components/FlexBox';

/**
 * * AccountActivatedPage for the root (/user/activated) route
 */
const AccountActivatedPage = () => (
  <FlexBox direction="column" align="center">
    <Title>Your account is now activated!</Title>
    <Button>Continue</Button>
  </FlexBox>
);
export default AccountActivatedPage;
