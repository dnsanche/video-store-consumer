import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import Movie from './Movie.js';
import  './Library.css';

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
    console.log('unselect move')
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
        <div key={movie.id}>
          <Movie id={movie.id} 
          imageUrl={movie.image_url} 
          title={movie.title} 
          overview={movie.overview} 
          releaseDate={movie.release_date} 
          externalId={movie.external_id}
          selected={this.isMovieSelected(movie)}
          selectedMovieCallback={this.onMovieSelected}
          unselectedMovieCallback={this.onMovieUnselect} />
         
        </div>
      )
    })

    return (
      <div className="movies">
        {movieInfo}
      </div>
    )
  }
}

Library.propTypes = {
  selectMovie: PropTypes.func,
  unselectMovie: PropTypes.func,
  selectedMoviesState: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Library
