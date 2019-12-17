import React, { Component } from 'react';
import axios from 'axios';


export class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      filteredList: [],
      error: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })  
  }

  // MovieSearch() {
  //   event.preventDefault();
  //   const KEY = "da1352497a26ef405ee2c9c2abb507be"
  //   const query = this.state.searchTerm
  //   const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
  //   axios.get(searchMovies).then((response) => {
  //     this.setState({
  //       filteredList: response.data.results,
  //     });
  //   })
  //   .catch((error) => {
  //     this.setState({ error: error.message });    
  //   });
  // }

  onSubmit = (event) => {
    event.preventDefault();
    const KEY = "da1352497a26ef405ee2c9c2abb507be"
    const query = this.state.searchTerm
    const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
    axios.get(searchMovies).then((response) => { 
      this.setState({
        filteredList: response.data.results,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });
  }

  render () {
    const movieSearch = this.state.filteredList.map((movie, i) => {
      return (
        <div>
          <img src={movie.image_url}></img>
          <h1>Title: {movie.title}</h1>
          <p>Id: {movie.id}</p>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      )});

    return (
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
    )
  }
}
export default MovieSearch
