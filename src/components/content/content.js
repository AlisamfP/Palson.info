import React, { Component } from 'react';
import './content.css';

class Content extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="content-menu">
          <div>Work</div>
          <div>Design</div>
          <div>Contribute</div>
          <div>Contact</div>
        </div>
        <div className="content-card">
          <p className="content-welcome">
            The name's Alisa.
          </p>
        </div>
      </div>
    )
  }
}

export default Content;
