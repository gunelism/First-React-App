import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import axios from 'axios';

class Series extends Component {

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
			<div>Service Container
        		length of series - {this.state.series.length}
        		<SeriesList list={this.state.series} />
			</div>
		)
	}
}

export default Series;