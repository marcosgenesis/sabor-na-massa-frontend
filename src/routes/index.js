import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import NewOrder from '~/pages/NewOrder';
import NewClient from '~/pages/NewClient';
import UpdateClient from '~/pages/UpdateClient';
import Dashboard from '~/pages/Dashboard';
import Signin from '~/pages/Signin';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/newOrder" isPrivate component={NewOrder} />
      <Route path="/newClient" isPrivate component={NewClient} />
      <Route path="/updateClient" isPrivate component={UpdateClient} />
    </Switch>
  );
}
export default Routes;
