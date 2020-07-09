import React, { Component } from 'react'
import '../css/movie.css';
import Movie from './Movie';
export class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: this.props.movies
        }
    }

    componentWillReceiveProps(props){
        if(props.movies !== this.state.movies)
            this.setState({movies: props.movies})
    }
    render() {
        return (
            <div className = "movie-container">
                {
                    this.state.movies.map((movie_i)=>(
                        <Movie key ={movie_i._id} movie = {movie_i} />
                    ))
                }
            </div>
        )
    }
}

export default Movies
