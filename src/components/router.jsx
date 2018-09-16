import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import About from './about';
import Home from './home';
import Skills from './skills';
import Work from './work';
import Now from './now';
import NotFound from './not-found';

const Router = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/now" component={Now} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Router;
