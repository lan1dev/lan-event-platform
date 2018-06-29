import React from 'react';
import RegisterFormContainer from '../containers/RegisterFormContainer';
import HomePageBase from './HomePageBase';
import FlexBox from '../common/FlexBox';
import Modal from '../common/Modal';

/**
 * RegisterPage for the /register route
 */
const RegisterPage = () => (
  <HomePageBase>
    <FlexBox justify="center" align="center">
      <Modal>
        <RegisterFormContainer />
      </Modal>
    </FlexBox>
  </HomePageBase>
);

export default RegisterPage;
