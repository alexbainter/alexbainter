import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../app';
import dynamicallyLoaded from './dynamically-loaded';

const About = dynamicallyLoaded(import('../about'));
const Home = dynamicallyLoaded(import('../home'));
const Positions = dynamicallyLoaded(import('../positions'));
const Projects = dynamicallyLoaded(import('../projects'));
const NotFound = dynamicallyLoaded(import('../not-found'));

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
