import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Math from "./components/math/Math";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rexpress - React & Express</h1>
        </header>
       <Math/>
          <p>* Przykładowy komponent pobierający dane z kontrolera Express</p>
      </div>
    );
  }
}

export default App;
