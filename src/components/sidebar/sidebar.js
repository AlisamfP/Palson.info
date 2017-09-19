import React, { Component } from 'react';
import photo from '../../photo.jpg';
import './sidebar.css';

class SideBar extends Component {
  render() {
    return (
        <div className="sidebar-container">
          <img src={photo} className="sidebar-face" alt="my face" />
          <div className="sidebar-info">
            Alisa Palson
            Software Enginner
            Design enthusiast
          </div>
        </div>
    )
  }
}

export default SideBar;
