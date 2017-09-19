import React, { Component } from 'react';
import  Content  from './components/content';
import  SideBar  from './components/sidebar';
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
