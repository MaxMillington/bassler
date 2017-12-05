import React, { Component } from 'react';
import './App.css';

import Layout from './app/components/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
