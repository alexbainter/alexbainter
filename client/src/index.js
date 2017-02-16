import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />
, document.querySelector('.container'));
