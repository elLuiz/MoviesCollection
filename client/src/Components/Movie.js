import React,{ Component } from 'react'
import {Link} from 'react-router-dom';
import Star from './Star'
export class Movie extends Component {

    checkImage = (image)=>{
        const path = "../img/";
        if(image === '')
            return <img src = '../img/notfound.jpg' alt = "Image not found" />
        else
            return <img src = {path + this.props.movie.img} alt = {this.props.movie.title} />
    }
    render() {
        return (
            <div key = {this.props.movie._id} className = "movie-card">
                <div className = "movie-image">
                    {
                        this.checkImage(this.props.movie.img)
                    }
                </div>
                <div className = "movie-information">
                    <Link to = {`/post/${this.props.movie._id}`} className = "title"> {this.props.movie.title} </Link>
                    <p className = "rating"> <Star length = {this.props.movie.rate} /> </p>

            
                </div>
            </div>
        )
    }
}

export default Movie
