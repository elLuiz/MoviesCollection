import axios from 'axios';
import './css/main.css';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import MovieDetail from './Components/MovieDetail';
import AddMovie from './Components/AddMovie';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component} from 'react'


export class App extends Component {
  state = {
    movies: []
  }

  async componentDidMount(){
    const movies = await axios.get('http://localhost:5000/post')
    const movies_json = await movies.data

    this.setState({movies: movies_json})
  }

  addMovie = (e)=>{
    this.setState({movies: [...this.state.movies, e]})
  }

  deleteMovie = (e)=>{
    this.setState({movies: [...this.state.movies.filter(movie=> movie._id !== e._id)]})
    console.log(this.state.movies)
  }

  
  render() {
    return (
      <div className="App">
        <Router>
              <Route exact path = "/" component ={Nav} />
              <Route exact path = "/" component ={()=>(<AddMovie addMovie = {this.addMovie} />)} /> 
              <Route exact path = "/" component = {()=>(<Movies key = {this.state.movies._id} movies = {this.state.movies.sort()}/>) } />  
              <Route exact path = "/post/:postId"  render = {(props)=>(<MovieDetail {...props} deleteMovie = {this.deleteMovie}/>)}/>
              {/* <Route exact path = "/post/:postId" component = {MovieDetail} /> */}
       
        </Router>
      </div>

    )
  }
}
export default App