import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Text from '../../components/Text';

const defaultProps = {
  errors: []
};

const propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string)
};

/**
 * ForgotPWForm Component
 */
const ForgotPasswordForm = ({ errors }) => (
  <Form>
    <Input name="email" label="&#xf003; Enter your email address" type="email" />
    {errors.map(errorMessage => <Text error>{errorMessage}</Text>)}
    <Button primary type="submit">
      Recover Password
    </Button>
  </Form>
);
ForgotPasswordForm.defaultProps = defaultProps;
ForgotPasswordForm.propTypes = propTypes;

/* eslint-disable no-class-assign */
export default ForgotPasswordForm;
