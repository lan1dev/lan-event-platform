import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const defaultProps = {
  isLoggedIn: false
};

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isLoggedIn: PropTypes.bool
};

const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

AuthRoute.defaultProps = defaultProps;
AuthRoute.propTypes = propTypes;
export default connect(mapStateToProps)(AuthRoute);
