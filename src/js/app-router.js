import React from 'react';
import Router from 'react-router';
import AppRouter from './app-router';

import App from './components/app';
import Home from './components/home';
import HelpMeTake from './components/help-me-take';
import IHelpTake from './components/i-help-take';
import Pickup from './components/pickup';
import Order from './components/order';
import IHelpTakeMap from './components/i-help-take-map'
import HelpMeTakeMap from './components/help-me-take-map'

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

export default (
  <Route name='root' path='/' handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name='home' handler={Home} />
    <Route name='help-me-take' handler={HelpMeTake} />
    <Route name='i-help-take' handler={IHelpTake} />
    <Route name='pickup' handler={Pickup} />
    <Route name='order' handler={Order} />
    <Route name='i-help-take-map' handler={IHelpTakeMap} />
    <Route name='help-me-take-map' handler={HelpMeTakeMap} />
  </Route>
);
