import React from 'react';
import LoginFormContainer from '../containers/LoginFormContainer';
import HomePageBase from './HomePageBase';
import FlexBox from '../components/FlexBox';
import Modal from '../components/Modal';

/**
 * LoginPage for the root (/login) route
 */
const LoginPage = () => (
  <HomePageBase>
    <FlexBox justify="center" align="center">
      <Modal>
        <LoginFormContainer />
      </Modal>
    </FlexBox>
  </HomePageBase>
);

export default LoginPage;
