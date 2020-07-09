import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button, Modal, Form, Col} from 'react-bootstrap';
import Movies from './Movies'
import 'bootstrap/dist/css/bootstrap.min.css';

export class AddMovie extends Component {
    constructor(){
        super();
        this.state = {
            show: false,
            movie: {
                title: '',
                rate: '',
                description: '',
                img: '',
                _id: ''
            },
            movieTitle: ''
        }
    }
    // Modal functions
    handleClose = ()=>{
        this.setState({...this.state.show, show: false})
    }

    handleShow = ()=>{
        this.setState({...this.state.show, show: true})
    }

    // Movie functions
    handleName = async event =>{
        const name = event.target.value;
        this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.movie.title = name;
            return newState;
          });
    }

    handleDescription = async event =>{
        const description = event.target.value;
        this.setState((prevState)=>{
            const newState = Object.assign({}, prevState);
            newState.movie.description = description;
            return newState;
        })

    }

    handleRating = async event=>{
        const rating = event.target.validity.valid ? event.target.value: 0;
        this.setState((prevState)=>{
            const newState = Object.assign({}, prevState);
            newState.movie.rate = rating;
            return newState;
        })
    }

    handleImage = async event=>{
        const img = event.target.files[0].name;
        this.setState((prevState)=>{
            const newState = Object.assign({}, prevState);
            newState.movie.img = img;
            return newState;    
        })
    }

    // Send movie to backend
    send = async ()=>{
        console.log('enter here')
        const movie = this.state.movie;
        try{
            const res = await axios.post('http://localhost:5000/post', movie)
            if(res.data.error)
                console.log(res.data.error)
            else if(res.data.driver)
               console.log(res.data.driver)
            else{
                this.setState({...this.state.show, show: false})
                this.setState({movieTitle: this.state.movie.title})
                this.props.addMovie({
                    title: res.data.title,
                    rate: res.data.rate,
                    img: res.data.img,
                    _id: res.data._id
                });
            }
              
        }catch(error){
            console.log(error)
        }        
    }

    render() {
        return (
            <>
                <div className = "insert-movie">
                    <button variant = "primary" onClick = {this.handleShow}> <i className = "fas fa-plus"></i> Insert a movie</button>
                </div>

                <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Insert a movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId = "movie-info">
                                        <Form.Label>Title: </Form.Label>
                                        <Form.Control 
                                            name = "movie" 
                                            type="text" 
                                            placeholder="Title"
                                            onChange = {this.handleName}
                                            />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId = "movie-rate">
                                        <Form.Label>Rate: </Form.Label>
                                        <Form.Control 
                                            name = "rate" 
                                            type="number" 
                                            min = "0" 
                                            max = "5" 
                                            defaultValue="0"
                                            onChange ={this.handleRating}
                                            />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId = "movie-poster">
                                        <Form.Label>Movie Poster</Form.Label>
                                        <Form.Control 
                                            name = "poster" 
                                            type = "file"
                                            onChange = {this.handleImage}>

                                            </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId = "description">
                                        <Form.Label>Summary: </Form.Label>
                                        <Form.Control 
                                            name = "summary" 
                                            as="textarea" 
                                            rows="3" 
                                            style = {{resize: 'none'}}
                                            onChange = {this.handleDescription}
                                            ></Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                
        
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}> Close </Button>
                            <Button variant="primary" onClick = {this.send}> Save </Button>
                        </Modal.Footer>
                    </Modal>                
            </>
        )
    }
}

export default AddMovie
