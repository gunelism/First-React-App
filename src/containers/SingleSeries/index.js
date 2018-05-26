import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state ={
        show: null
    }
    componentDidMount() {
        const { id }  = this.props.match.params 
        axios.get(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then( response => this.setState({show: response.data }) )
    }
    render(){
        const { show } = this.state;
        return(
            <div>
                {
                    show === null && <Loader />
                }
                {
                    show !==null 
                    &&
                    <div> 
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt={show.name} src={show.image.medium} />
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;