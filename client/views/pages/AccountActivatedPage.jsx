import React, { Fragment } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';

/**
 * * AccountActivatedPage for the root (/user/activated) route
 */
const AccountActivatedPage = () => (
  <Fragment>
    <Title>Your account is now activated!</Title>
    <Button>Continue</Button>
  </Fragment>
);
export default AccountActivatedPage;
