import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Text from '../../components/Text';
import { BASE_URI } from '../../../configs/URI';

const defaultProps = {
  errors: []
};

const propTypes = {
  sendForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string)
};

/**
 * RegisterForm Component
 */
class RegisterForm extends Component {
  handleSubmit = values => {
    /* eslint-disable-next-line react/destructuring-assignment */
    this.props.sendForm(`${BASE_URI}/auth/signup`, values);
  };

  render() {
    const { handleSubmit, errors, success } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field name="name" label="&#xf003; Name" component={InputField} type="text" />
        <Field name="email" label="&#xf003; Email" component={InputField} type="email" />
        <Field name="password" label="&#xf13e;  Password" component={InputField} type="password" />
        {errors.map(errorMessage => <Text error>{errorMessage}</Text>)}
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onChange={this.handleChange}
        >
          Register
        </Button>
        {success && <Redirect to="/login" />}
      </Form>
    );
  }
}

RegisterForm.defaultProps = defaultProps;
RegisterForm.propTypes = propTypes;

/* eslint-disable no-class-assign */
RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;
