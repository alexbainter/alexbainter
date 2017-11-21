import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './app';
import { About } from './about';
import { Home } from './home';
import { Skills } from './skills';
import { Work } from './work';
import { NotFound } from './not-found';

const Router = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Work} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </BrowserRouter>
);

export { Router };
