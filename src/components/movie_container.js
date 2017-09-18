import React,{Component} from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
        };
    }
    componentWillMount() {
        const url = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
        axios.get(url).then((resp) => {
            console.log('Resp:', resp);

            this.setState({
                movies: resp.data.feed.entry
            });
        });

    }
    render(){
        console.log('The state is:',this.state);
        const movieList= (this.state.movies).map(function(movieInfo,index){return <Movie info={movieInfo} key={index}/>});
        return (
            <div className="container">
                {movieList}
            </div>
        );
    }

}

export default MovieContainer;