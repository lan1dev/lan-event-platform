import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import DashboardHome from '../pages/DashboardHome';
import DashboardTickets from '../pages/DashboardTickets';
import LoginPage from '../pages/LoginPage';
import LogoutPageContainer from '../containers/LogoutPageContainer';
import AuthRoute from './AuthRoute';

/* eslint-disable react/no-multi-comp */

/**
 * Admin Routes
 */
const AdminRoutes = () => (
  <Switch>
    <AuthRoute path="/dashboard" component={DashboardHome} />
    <AuthRoute path="/logout" component={LogoutPageContainer} />
    <AuthRoute path="/dashboard/tickets" component={DashboardTickets} />
  </Switch>
);

/**
 * Routes component, return frontend routes
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/login" component={LoginPage} />
    <AdminRoutes />
  </Switch>
);

export default Routes;
