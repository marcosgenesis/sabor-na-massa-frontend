import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewOrder from './pages/NewOrder';
import NewClient from './pages/NewClient';
import UpdateClient from './pages/UpdateClient';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/newOrder" component={NewOrder} />
      <Route path="/newClient" component={NewClient} />
      <Route path="/updateClient" component={UpdateClient} />
    </Switch>
  );
}
export default Routes;
