import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a
              className="dropdown-button red-text text-darken-3"
              href="#!"
              data-activates="dropdown1"
            >
              About us<i className="material-icons right">arrow_drop_down</i>
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

  renderList() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a href="#!" className="red-text text-darken-3">
                Community
              </a>
            </li>
            <li>
              <a href="#!" className="red-text text-darken-3">
                Payments
              </a>
            </li>
            <li className="divider" />
            <li>
              <a href="#!" className="red-text text-darken-3">
                Share
              </a>
            </li>
          </ul>
        );
      default:
        return;
    }
  }

  componentDidMount() {
    $('.dropdown-button').dropdown();
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <nav>
          <div className="navbar-fixed nav-wrapper light-blue lighten-3">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
              style={{ margin: '0 10px' }}
            >
              Curated
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
