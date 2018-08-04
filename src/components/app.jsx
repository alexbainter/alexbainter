import React, { Component } from 'react';
import Nav from './nav';
import 'styles/_app.scss';

const App = ({ children }) => (
  <div>
    <Nav />
    <div className="content">{children}</div>
  </div>
);

export default App;
