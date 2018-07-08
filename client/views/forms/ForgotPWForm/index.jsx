import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  isLoggedIn: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string)
};

/**
 * LoginForm Component
 */
class LoginForm extends Component {
  handleSubmit = values => {
    /* eslint-disable-next-line react/destructuring-assignment */
    this.props.sendForm(`${BASE_URI}/auth/login`, values);
  };

  render() {
    const { isLoggedIn, handleSubmit, errors } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          name="email"
          label="&#xf003; Enter your email address"
          component={InputField}
          type="email"
        />
        {errors.map(errorMessage => <Text error>{errorMessage}</Text>)}
        <Button primary type="submit">
          Recover
        </Button>
        {isLoggedIn && <Redirect to="/dashboard" />}
      </Form>
    );
  }
}

LoginForm.defaultProps = defaultProps;
LoginForm.propTypes = propTypes;

/* eslint-disable no-class-assign */
LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
