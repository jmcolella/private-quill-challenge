import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { passageApp } from './reducers/app_reducers';
import App from './App';
import './index.css';

ReactDOM.render(
  <App store={ createStore( passageApp ) } />,
  document.getElementById('root')
);
