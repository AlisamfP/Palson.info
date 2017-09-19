import React, { Component } from 'react';
import photo from '../../photo.jpg';
import './sidebar.css';

class SideBar extends Component {
  render() {
    return (
        <div className="sidebar-container">
          <img src={photo} className="sidebar-face" alt="my face" />
          <div className="sidebar-info">
            <p>Alisa Palson</p>
            <p>Software Enginner</p>
            <p>Design enthusiast</p>
          </div>
        </div>

    )
  }
}

export default SideBar;
