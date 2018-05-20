import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    series: [] 
  }

  componentDidMount(){
    axios.get('http://api.tvmaze.com/search/shows?q=Vikings')
    .then( response => this.setState({series:response.data}) )
    .catch(function (error) {
      console.log(error);
    });    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tv series</h1>          
        </header>
        <Intro msg=" List of TV-Series " />
        length of series - {this.state.series.length}
      </div>
    );
  }
}

export default App;
