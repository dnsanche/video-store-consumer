import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Card } from 'react-bootstrap';


export class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      filteredList: [],
      selectedMovie: '',
      error: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })  
  }

  onSubmit = (event) => {
    event.preventDefault();
    const searchMoviesURL = 'http://localhost:3000/movies'
    axios.get(searchMoviesURL, {params: {query: this.state.searchTerm}}).then((response) => { 
      this.setState({
        filteredList: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });

    this.setState({  searchTerm: '' });
  }


  addToLibrary = (movie, event) => {
    event.preventDefault();
    console.log("test")
    const postMovie = 'http://localhost:3000/movies'
    axios.post(postMovie, {
      "title": movie.title,
      "external_id": movie.external_id,
      "overview": movie.overview,
      "release_date": movie.release_date, 
       "image_url": movie.image_url
    }).then((response) => {
      this.setState({
        selectedMovie: response.data,
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    });  
  }

  render () {
    const movieSearch = this.state.filteredList.map((movie, i) => {
      return (
        <Row key={i}>
          <Card.Img variant="top" img src={movie.image_url}/>
          <Card.Body>
            <Card.Title>Title: {movie.title}</Card.Title>
            <Card.Text>EXTERNAL ID: {movie.id}</Card.Text>
            <Card.Text>Overview: {movie.overview}</Card.Text>
            <Card.Text>Release Date: {movie.release_date}</Card.Text>
            <button onClick={(event)=> {this.addToLibrary(movie)}}>Add to Rental Library</button>
          </Card.Body>
          
        </Row>
      )});

    return (
      <Card style={{ width: '15rem' }}>
      <form>
        <section>
          <input
            type="text"
            placeholder="Search Movie Title"
            onChange={this.onSearchChange}
            value={this.state.searchTerm}
          /> 
          <input onClick ={this.onSubmit} type="submit" value="Submit" />
        </section>
          {movieSearch}
      </form>
      </Card>
    )
  }
}
export default MovieSearch
