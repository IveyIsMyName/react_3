import React from 'react';
import logo from '../logo.svg';
import Header from './header/Header.js';
import './App.css';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import DecimalToBinary from './decimal_to_binary/DecimalToBinary.js';
import DecimalToHex from './decimal_to_hex/DecimalToHex.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
    <Header />
    <Hello />
    <Length />
    <hr />
    <DecimalToBinary />
    <hr />
    <DecimalToHex />
    </div>
  );
}
}

export default App;
