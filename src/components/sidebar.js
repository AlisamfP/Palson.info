import React, { Component } from 'react';
import photo from '../photo.jpg';
import '../index.css';

class SideBar extends Component {
  render() {
    return (
        <div className="main-sidebar">
          <img src={photo} className="main-logo" alt="logo" />
          <div>Alisa Palson</div>
        </div>
    )
  }
}

export default SideBar;
