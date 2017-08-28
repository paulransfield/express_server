import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" className="red-text text-darken-3">
              Login
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li
            key="3"
            className="red-text text-darken-3"
            style={{ margin: '0 20px' }}
          >
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout" className="red-text text-darken-3">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="navbar-fixed nav-wrapper light-blue lighten-3">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
            style={{ margin: '0 10px' }}
          >
            Curated
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
