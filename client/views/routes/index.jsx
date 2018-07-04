import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import DashboardHome from '../pages/DashboardHome';
import DashboardTickets from '../pages/DashboardTickets';
import LoginPage from '../pages/LoginPage';
import LogoutPageContainer from '../containers/LogoutPageContainer';
import DashboardSponsors from '../pages/DashboardSponsors';
import { getUser } from '../../state/user/selectors';

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

/**
 * Routes component, return frontend routes
 */
const Routes = ({ isLoggedIn }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/login" component={LoginPage} />
    <Route exact path="/dashboard" component={isLoggedIn ? DashboardHome : HomePage} />
    <Route path="/logout" component={isLoggedIn ? LogoutPageContainer : HomePage} />
    <Route path="/dashboard/tickets" component={isLoggedIn ? DashboardTickets : HomePage} />
    <Route path="/dashboard/sponsors" component={isLoggedIn ? DashboardSponsors : HomePage} />
  </Switch>
);

Routes.propTypes = propTypes;

const mapStateToProps = state => ({
  isLoggedIn: getUser(state).isLoggedIn
});
/* eslint-enable require-jsdoc */

export default connect(mapStateToProps)(Routes);
