import React, { Component } from 'react';
import SideBar from './sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <SideBar></SideBar>
        <div className="main-body">
          <p className="main-intro">
            The name's Alisa.
          </p>
        </div>
      </div>
    )
  }
}

export default App;
