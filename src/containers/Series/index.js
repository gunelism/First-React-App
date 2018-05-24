import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import axios from 'axios';
import Loader from '../../components/Loader';

class Series extends Component {

	 state = {
	    series: [],
	    seriesName: '',
	    // to know when we are fetching something from api
	    isFetching: false 
	  }

	  // componentDidMount(){
	  //   axios.get('http://api.tvmaze.com/search/shows?q=Vikings')
	  //   .then( response => this.setState({series:response.data}) )
	  //   .catch(function (error) {
	  //     console.log(error);
	  //   });    
	  // }

	  onSeriesInputChange = e =>{
	  	this.setState({seriesName:e.target.value, isFetching:true})
	  	 axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
	    .then( response => this.setState({series:response.data, isFetching:false}) )
	  	// console.log(e.target.value)
	  }
	render() {
		const {series, seriesName, isFetching} = this.state;
		return (
			<div> 
				<div>
					<input 
					value={seriesName}
					type="text" 
					onChange={this.onSeriesInputChange} />
				</div>
        		{
        			series.length === 0 && seriesName.trim() === ''
        			&& 
        			<p>Please enter series name into the input</p>
        		}
        		{
        			!isFetching && series.length === 0 && seriesName.trim() !== ''
        			&& 
        			<p>No series found with this name</p>
        		}
        		{
        			isFetching && <Loader />
        		}
        		{
        			!isFetching && <SeriesList list={this.state.series} />
        		}
        		
			</div>
		)
	}
}

export default Series;