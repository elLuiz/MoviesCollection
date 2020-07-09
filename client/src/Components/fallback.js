import React, {useState} from 'react'
import {Button, Modal, Form, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [rating, setRating]=useState(0);
    const [description, setDescription] = useState('');
    const [img, setImage] = useState('');
    const [movie, setMovie] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    

    const Name = async event =>{
        const name = event.target.value
        setName(name);
    }
    const Rating = async event =>{
        const rating = event.target.validity.value ? event.target.value : 0
        setRating(rating);
    }

    const Description = async event =>{
        const description = event.target.value;
        setDescription(description);
    }

    const Image_F = async event =>{
        const img = event.target.files[0];
        setImage(img);
    }

    const checkInfo = async event =>{
        event.preventDefault();
        setMovie({'title': name,  'rate': rating})


        const {title, description, rate, img} = movie;
        console.log("Title: " +title) 
        console.log("Description: " +description) 
        console.log("Rate: " +rate) 
        
    }

    return (
        <>
            <nav className="main-nav">
                <div className = "slogan-div">
                    <i className="fas fa-film"></i>
                    <h1 className="title">MYMOVIES</h1>
                </div>

                <div className = "search-bar">
                    <form>
                        <input type = "text" name = "search"/>
                        <button type = "submit"><i className = "fas fa-search"></i></button>
                    </form>
                </div>

                <div className = "insert-movie">
                    <button variant = "primary" onClick = {handleShow}> <i className = "fas fa-plus"></i> Insert a movie</button>
                </div>
            </nav>
           <Modal
                show={show}
                onHide={handleClose}
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
                                    onChange = {Name}
                                    />
                            </Form.Group>

                            <Form.Group as={Col} controlId = "movie-rate">
                                <Form.Label>Rate: </Form.Label>
                                <Form.Control 
                                    name = "rate" 
                                    type="number" 
                                    min = "0" 
                                    max = "10" 
                                    defaultValue="0"
                                    onChange ={Rating}
                                    />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId = "movie-poster">
                                <Form.Label>Movie Poster</Form.Label>
                                <Form.Control 
                                    name = "poster" 
                                    type = "file"
                                    onChange = {Image_F}>

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
                                    onChange = {Description}
                                    ></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        
 
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                    <Button variant="primary" onClick = {checkInfo}> Save </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
