import React, { Component } from 'react';
import Nav from './nav';
import 'styles/_app.scss';

const App = ({ children }) => (
  <div>
    <Nav />
    <main className="content">{children}</main>
  </div>
);

export default App;
