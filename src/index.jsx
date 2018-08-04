import React from 'react';
import { render } from 'react-dom';
import { Router } from './components/router';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';

render(<Router />, document.querySelector('.container'));
