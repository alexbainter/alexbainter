import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { rootReducer } from './reducers';
import { Router } from './components/router';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router />
  </Provider>,
  document.querySelector('.container')
);
