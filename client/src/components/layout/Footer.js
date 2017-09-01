import React, { Component } from 'react';
import { connect } from 'react-redux';
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
              <ul>
                <li className="waves-effect waves-light">
                  <a href="/auth/google">
                    <i
                      className="fa fa-google fa-fw"
                      aria-hidden="true"
                    />Google
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="/auth/twitter">
                    <i
                      className="fa fa-twitter fa-fw"
                      aria-hidden="true"
                    />Twitter
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="/auth/facebook">
                    <i
                      className="fa fa-facebook fa-fw"
                      aria-hidden="true"
                    />Facebook
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="#!">
                    <i
                      className="fa fa-github fa-fw"
                      aria-hidden="true"
                    />Github
                  </a>
                </li>
                <li className="waves-effect waves-light">
                  <a href="#!">
                    <i
                      className="fa fa-id-card fa-fw"
                      aria-hidden="true"
                    />RealMe
                  </a>
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
