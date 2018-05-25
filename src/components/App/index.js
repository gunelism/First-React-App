import React, { Component } from 'react';
import './App.css';
import Main from '../Main';
// import Series from '../../containers/Series';
// import axios from 'axios';

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tv series</h1>          
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
