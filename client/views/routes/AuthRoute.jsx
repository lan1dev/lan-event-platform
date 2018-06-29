import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const defaultProps = {
  isLoggedIn: false
};

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  access: PropTypes.arrayOf(PropTypes.string).isRequired,
  role: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool
};

const AuthRoute = ({ component: Component, access, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.session.loggedInAs.isLoggedIn
});

AuthRoute.defaultProps = defaultProps;
AuthRoute.propTypes = propTypes;
export default connect(mapStateToProps)(AuthRoute);
