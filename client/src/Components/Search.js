import React, { Component } from 'react';
import SearchItem from './SearchItem';
import axios from 'axios';
export class Search extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            display: 'none'
        }
    }

    handleSearch = async e =>{
        console.log(e.target.value)
        try{
            if(e.target.value.length > 0){

                const res = await axios.get(`http://localhost:5000/post/title/${e.target.value}`)
                const moviesSearch = await res.data;
                
                console.log(moviesSearch)
                this.setState({display: 'flex', movies: moviesSearch})
            }else{
                this.setState({display: 'none'})
            }
        }catch(error){
            console.log(error)

        }
    }

    render() {
        return (
            <>
                <div className = "search-bar">
                    <form autoComplete = "off">
                        <div className = "input">
                            <input 
                                type = "text" 
                                name = "search"
                                onChange = {this.handleSearch}    
                            />
                            <button type = "button"><i className = "fas fa-search"></i></button> 
                        </div>

                        <SearchItem display = {this.state.display} movies = {this.state.movies} />
                    </form>
                </div>
            </>
        )
    }
}

export default Search
