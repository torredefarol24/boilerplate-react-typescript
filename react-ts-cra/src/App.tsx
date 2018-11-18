import React, { Component } from 'react';
import Hello from './Hello';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3> React in TypeScript</h3>
        <Hello message="TypeScript Fan"></Hello>
      </div>
    );
  }
}

export default App;
