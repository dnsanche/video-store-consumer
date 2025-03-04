import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import Movie from './Movie.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card } from 'react-bootstrap';

export class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    const movies = 'http://localhost:3000/movies'
    axios.get(movies).then((response) => {
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });
  }

  onMovieSelected = (movieId) => {
    /* what to do when movie is selected/clicked */
    let movieObject = this.state.movies.find((movie) => {
      if (movie.id === movieId) {
        return true
      } else {
        return false
      }
    })

    this.props.selectMovie(movieObject)

  }

  onMovieUnselect = (movieId) => {
    /* what to do when movie is unselected/unclocked */
    let movieObject = this.state.movies.find((movie) => {
      if (movie.id === movieId) {
        return true
      } else {
        return false
      }
    })
    this.props.unselectMovie(movieObject)
  }

  isMovieSelected = (movie) => {
    let selectionMovies = this.props.selectedMovieState

    let movieSelected =  false
    if (movie.id === selectionMovies.id) {
      movieSelected =  true
    }

    return movieSelected
  }

  render() {
    const movieInfo = this.state.movies.map((movie, i) => {
      return (
        
            <Movie key={i}
            id={movie.id} 
            imageUrl={movie.image_url} 
            title={movie.title} 
            overview={movie.overview} 
            release_date={movie.release_date} 
            external_id={movie.external_id}
            selected={this.isMovieSelected(movie)}
            selectedMovieCallback={this.onMovieSelected}
            unselectedMovieCallback={this.onMovieUnselect} />
      )
    })

    return (
      <Card>
        <Row>
        {movieInfo}
        </Row>
      </Card>
    )
  }
}

Library.propTypes = {
  selectMovie: PropTypes.func,
  unselectMovie: PropTypes.func,
  selectedMovieState: PropTypes.object.isRequired
}

export default Library
