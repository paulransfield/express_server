import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SocialLogins extends Component {
  render() {
    return (
      <ul>
        <li className="waves-effect waves-light">
          <a href="/auth/google">
            <i className="fa fa-google fa-fw" aria-hidden="true" />Google
          </a>
        </li>
        <li className="waves-effect waves-light">
          <a href="/auth/twitter">
            <i className="fa fa-twitter fa-fw" aria-hidden="true" />Twitter
          </a>
        </li>
        <li className="waves-effect waves-light">
          <a href="/auth/facebook">
            <i className="fa fa-facebook fa-fw" aria-hidden="true" />Facebook
          </a>
        </li>
        <li className="waves-effect waves-light">
          <a href="#!">
            <i className="fa fa-github fa-fw" aria-hidden="true" />Github
          </a>
        </li>
        <li className="waves-effect waves-light">
          <a href="#!">
            <i className="fa fa-id-card fa-fw" aria-hidden="true" />RealMe
          </a>
        </li>
        <li className="waves-effect waves-light">
          <a href="#!">
            <i className="fa fa-user fa-fw" aria-hidden="true" />Login
          </a>
        </li>
      </ul>
    );
  }
}

export default connect(null, actions)(SocialLogins);
