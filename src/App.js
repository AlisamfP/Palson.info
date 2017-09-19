import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
        </div>
        <div className="Main-body">
          <p className="Main-intro">
            The name's Alisa.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
