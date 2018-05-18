import React, { Component } from 'react';
import logo from './logo.svg';
import NewsFeed from './components/NewsFeed/NewsFeed.js';
import Login from './components/Auth/Login.js';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Facebook</h1>
        </header>
        <Route exact path="/" component={NewsFeed}/>
        <Route exact path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
