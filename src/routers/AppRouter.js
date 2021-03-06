import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import * as History from 'history';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import WatchVideoPage from '../components/WatchVideoPage';
import WatchLater from '../components/WatchLaterPage';


export const history = History.createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />   
        <PrivateRoute path="/create" component={WatchVideoPage} />
        <PrivateRoute path="/watch/:id" component={WatchLater} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;