import React, { Fragment } from 'react';
import Title from '../common/Title';
import Button from '../common/Button';

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
