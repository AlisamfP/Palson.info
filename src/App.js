import React, { Component } from 'react';
import Content from './components/content/content';
import SideBar from './components/sidebar/sidebar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.state = {
      activeMenu: false
    };
  }

  toggleSideBar() {
    let sideBarState = !this.state.activeMenu
    this.setState({
      activeMenu: sideBarState
    })
  }

  render() {
    let menu;
    let {activeMenu} = this.state
    if(activeMenu) {
      menu = <div>HEY</div>
    }
    else {
      menu = <SideBar></SideBar>
    }
    return (
      <div className="main-wrapper">
        <i className="fa fa-rocket" onClick={this.toggleSideBar} />
        { menu }
        <Content></Content>
      </div>
    )
  }
}

export default App;
