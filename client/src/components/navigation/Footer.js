import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocialLogins from './SocialLogin';
// import { Link } from 'react-router-dom';

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
                <i className="fa fa-sign-in" aria-hidden="true" />Login
              </a>
              <SocialLogins />
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
