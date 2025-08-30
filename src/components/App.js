import React from 'react';
import logo from '../logo.svg';
import Header from './header/Header.js';
import './App.css';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
    <Header />
    <Hello />
    <Length />
    </div>
  );
}
}

export default App;
