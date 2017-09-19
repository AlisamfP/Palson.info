import React, { Component } from 'react';
import Content from './components/content/content';
import SideBar from './components/sidebar/sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <SideBar></SideBar>
        <Content></Content>
      </div>
    )
  }
}

export default App;
