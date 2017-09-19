import React, { Component } from 'react';
import photo from './photo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="main-sidebar">
          <img src={photo} className="main-logo" alt="logo" />
          <div>Alisa Palson</div>
        </div>
        <div className="main-body">
          <p className="main-intro">
            The name's Alisa.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
