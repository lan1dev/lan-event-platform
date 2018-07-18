import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import DashboardHome from '../pages/DashboardHome';
import DashboardTickets from '../pages/DashboardTickets';
import LoginPage from '../pages/LoginPage';
import LogoutPageContainer from '../containers/LogoutPageContainer';
import DashboardSponsors from '../pages/DashboardSponsors';
import DashboardTournaments from '../pages/DashboardTournaments';
import AccountActivatedPage from '../pages/AccountActivatedPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import DashboardQRScanner from '../pages/DashboardQRScanner';

/**
 * Routes component, return frontend routes
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/login" component={LoginPage} />
    <Route exact path="/dashboard" component={DashboardHome} />
    <Route path="/logout" component={LogoutPageContainer} />
    <Route path="/dashboard/tickets" component={DashboardTickets} />
    <Route path="/dashboard/tournaments" component={DashboardTournaments} />
    <Route path="/dashboard/sponsors" component={DashboardSponsors} />
    <Route path="/user/activated" component={AccountActivatedPage} />
    <Route path="/forgot-password" component={ForgotPasswordPage} />
    <Route path="/dashboard/QRScanner" component={DashboardQRScanner} />
  </Switch>
);

export default Routes;
