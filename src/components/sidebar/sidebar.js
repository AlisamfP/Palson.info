import React, { Component } from 'react';
import photo from '../../photo.jpg';
import './sidebar.css';


class SideBar extends Component {
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
    let menu
    let {activeMenu} = this.state
    if(activeMenu) {
      menu = <div>HEY</div>
    }
    else {
      menu = <div className="sidebar--expanded">
        {/* <img src={photo} className="sidebar-face" alt="my face" /> */}
        <div className="sidebar-info">
          <p>Alisa Palson</p>
          <p>Certified human being</p>
          <p>Javascript Vixen.</p>
        </div>
      </div>
    }
    return (
      <div className="sidebar-container">
        <i className="fa fa-rocket" onClick={this.toggleSideBar} />
        { menu }
      </div>
    )
  }
}

export default SideBar;
