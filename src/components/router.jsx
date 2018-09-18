import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import About from './about';
import Home from './home';
import Positions from './positions';
import Projects from './projects';
import NotFound from './not-found';

const Router = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/positions" component={Positions} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Router;
