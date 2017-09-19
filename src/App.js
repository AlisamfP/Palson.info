import React, { Component } from 'react';
import photo from './photo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-header">
          <img src={photo} className="Main-logo" alt="logo" />
          <div>Alisa Palson</div>
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
