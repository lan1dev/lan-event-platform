import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPageContainer from '../containers/DashboardPageContainer';
import TicketsPage from '../pages/TicketsPage';
import LoginPage from '../pages/LoginPage';
import LogoutPageContainer from '../containers/LogoutPageContainer';
import AuthRoute from './AuthRoute';

/**
 * User Routes
 */
const UserRoutes = () => (
  <Switch>
    <AuthRoute path="/dashboard" component={DashboardPageContainer} />
    <AuthRoute path="/logout" component={LogoutPageContainer} />
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
    <Route path="/dashboard/tickets" component={TicketsPage} />
    <UserRoutes />
  </Switch>
);

export default Routes;
