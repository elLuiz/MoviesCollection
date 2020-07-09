import React, { Component, useState, useEffect } from 'react'

import {Link} from 'react-router-dom'; 
import axios from 'axios';
import Star from './Star';

export class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = { movie: {}}
    }
    async componentDidMount(){
        
        try{
            const res = await axios.get(`http://localhost:5000/post/${this.props.match.params.postId}`)
            const data = await res.data;
            this.setState({movie: data});
            console.log(this.state)
        }catch(error){
            console.log(error)
        }

    }
    deleteMovie = async ()=>{
        try{
            const res = await axios.delete(`http://localhost:5000/post/${this.state.movie._id}`)
            console.log(res)
            if(res.data.ok === 1){
                this.props.deleteMovie({
                    title: this.state.movie.title,
                    rate: this.state.movie.rate,
                    img: this.state.movie.img,
                    _id: this.state.movie._id
                });
                this.props.history.push("/");
            }


            else 
                throw 'Could not delete your movie'
        }catch(error){
            console.log(error)
        }
    }

    defineImg = (image, title)=>{
        const path = "../img/";
        if(image === '')
            return <img src = '../img/notfound.jpg' alt = "Image not found" />
        else
            return <img src = {path + image} alt = {title} />

    }
    render() {
        const {title, img, description, rate} = this.state.movie;
        return (
            <div>
            <div className = "detail-container">
                <nav>
                    <Link to = "/"> Back </Link>
                </nav>

                <div className = "movie-detail">
                    <div className = "movie-poster">
                         {this.defineImg(img, title)}
                    </div>
                    <div className = "movie-info">
                        <p className = "title"> {title}</p>
                        <hr/>
                        <p className = "descriptionn">Summary: {description}</p>
                        <p className = "rating">Personal Rating: <Star length = {rate} />  </p>

                        <div className = "delete-movie">
                            <button className = "delete" onClick = {this.deleteMovie}>Delete movie</button>
                        </div>
                    </div>     
                </div>
            </div>                          
            </div>
        )
    }
}

export default MovieDetail

