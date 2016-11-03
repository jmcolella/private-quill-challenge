import React from 'react';
const logo = '//d2t498vi8pate3.cloudfront.net/assets/home-header-logo-8d37f4195730352f0055d39f7e88df602e2d67bdab1000ac5886c5a492400c9d.png';
import './AppHeader.css';

const AppHeader = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Passage Concepts</h2>
  </div>
);

export default AppHeader;