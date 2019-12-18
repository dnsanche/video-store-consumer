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

  onSubmit = (event) => {
    event.preventDefault();
    const searchMoviesURL = 'http://localhost:3000/movies'
    axios.get(searchMoviesURL, {params: {query: this.state.searchTerm}}).then((response) => { 
      console.log("response:", response)
      this.setState({
        filteredList: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });

    this.setState({  searchTerm: '' });
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
