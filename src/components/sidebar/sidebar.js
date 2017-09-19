import React, { Component } from 'react';
import photo from '../../photo.jpg';
import './sidebar.css';


class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar--expanded">
          <img src={photo} className="sidebar-face" alt="my face" />
          <div className="sidebar-info">
            <p>Alisa Palson</p>
            <p>Certified human being</p>
            <p>Javascript Vixen.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar;
