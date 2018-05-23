import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';
import Series from '../../containers/Series';
// import axios from 'axios';

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tv series</h1>          
        </header>
        <Intro msg=" List of TV-Series " />
        <Series />
      </div>
    );
  }
}

export default App;
