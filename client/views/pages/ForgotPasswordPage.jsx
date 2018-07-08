import React from 'react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import HomePageBase from './HomePageBase';
import FlexBox from '../components/FlexBox';
import Modal from '../components/Modal';

const ForgotPasswordPage = () => (
  <HomePageBase>
    <FlexBox justify="center" align="center">
      <Modal>
        <ForgotPasswordForm />
      </Modal>
    </FlexBox>
  </HomePageBase>
);

export default ForgotPasswordPage;
