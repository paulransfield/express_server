import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            WePlay
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
