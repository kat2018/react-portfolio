import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';

// If it's a class name, it must be capitalized. (Example: App, Component and Profile ^)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
