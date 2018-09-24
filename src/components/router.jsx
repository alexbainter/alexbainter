import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import dynamicallyLoaded from './dynamically-loaded';

const makeDynamicallyLoadedRoute = componentModulePromise =>
  dynamicallyLoaded(componentModulePromise, <div>...</div>);

const About = makeDynamicallyLoadedRoute(import('./about'));
const Home = makeDynamicallyLoadedRoute(import('./home'));
const Positions = makeDynamicallyLoadedRoute(import('./positions'));
const Projects = makeDynamicallyLoadedRoute(import('./projects'));
const NotFound = makeDynamicallyLoadedRoute(import('./not-found'));

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
