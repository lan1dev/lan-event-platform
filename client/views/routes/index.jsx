import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import DashboardHome from '../pages/DashboardHome';
import DashboardTickets from '../pages/DashboardTickets';
import LoginPage from '../pages/LoginPage';
import LogoutPageContainer from '../containers/LogoutPageContainer';
import DashboardSponsors from '../pages/DashboardSponsors';

/* eslint-disable react/no-multi-comp */

/**
 * Admin Routes
 */
const AdminRoutes = () => (
  <Switch>
    <Route exact path="/dashboard" component={DashboardHome} />
    <Route path="/logout" component={LogoutPageContainer} />
    <Route path="/dashboard/tickets" component={DashboardTickets} />
    <Route path="/dashboard/sponsors" component={DashboardSponsors} />
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
