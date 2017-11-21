import React, { Component } from 'react';
import { Nav } from './nav';
import 'styles/_app.scss';

const App = () => (
  <div>
    <Nav />
    <div className="content">{this.props.children}</div>
  </div>
);

export { App };
