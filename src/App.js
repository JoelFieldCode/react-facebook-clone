import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from './components/Posts/Posts.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Facebook</h1>
        </header>
        <Posts/>
      </div>
    );
  }
}

export default App;
