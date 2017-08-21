import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>#gotta.luv.react</h2>
        </div>
        <p className="App-intro">click to login</p>
        <a href="/auth/google/">Sign in with Google</a>
      </div>
    );
  }
}

export default App;
