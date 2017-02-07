import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import About from './components/about';
import Home from './components/home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
    </Route>
);
