import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class SearchItem extends Component {

    handleImg = (image, title)=>{
        const path = "../img/";
        if(image === '')
            return <img src = '../img/notfound.jpg' alt = "Image not found" />
        else
            return <img src = {path + image} alt = {title} />
    }

    handleResponse = (res)=>{
        if(res.length > 0){
            return (
                this.props.movies.map((movies)=>(
                    <div key = {movies._id} className = "searched-movie">
                        {this.handleImg(movies.img, movies.title)}
                        <Link to = {`/post/${movies._id}`}>{movies.title}</Link>
                    </div>
                ))
            )
        }else{
            return (
                <div key ='not-found' className = "searched-movie">
                    <i class="fas fa-ticket-alt"></i>
                    <p className = "not-found"> Movie not found</p>
                </div>
   
            )
        }
    }
    render() {
        return (
            <div className = "related-movies" style = {{display: this.props.display}}>
                {
                    this.handleResponse(this.props.movies)
                }
            </div>
  
        )
    }
}

export default SearchItem
