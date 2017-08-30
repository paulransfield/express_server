import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <footer>
            <div className="fixed-action-btn toolbar renderOpen">
              <a className="btn-floating btn-large light-blue lighten-3">
                <i className="large material-icons">vpn_key</i>Login
              </a>
              <ul>
                <li className="waves-effect waves-light">
                  <a href="/auth/google">Google</a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="/auth/twitter">Twitter</a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="#!">Facebook</a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="#!">Github</a>
                </li>
              </ul>
            </div>
          </footer>
        );
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Footer);
