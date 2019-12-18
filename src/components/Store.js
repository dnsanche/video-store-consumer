import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Customers from './Customers.js';
import Library from './Library.js';
import MovieSearch from './MovieSearch';


export class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovies: []
    };
  }

  selectedMovieCallback = (movie) => {
    let updatedSelectedMovies = this.state.selectedMovies
    updatedSelectedMovies.push(movie)

    this.setState ({
      selectedMovies: updatedSelectedMovies
    }) 
  }

  unselectMovieCallback = (movie) => {
    const updatedSelectedMovies = this.state.selectedMovies.filter((movieTarget) => {
      return movie.id === movieTarget.id ? false : true 
    })

    this.setState ({
      selectedMovies: updatedSelectedMovies
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/customers"> Customers </Link> </li>
                <li> <Link to="/library"> Library </Link> </li>
                <li> <MovieSearch/> </li>
              </ul>
            </nav>
            <p>Selected Movies: </p>
            <ul>{ this.state.selectedMovies.map((movie) => <li>{movie.title}</li>)}</ul>
            <Switch>
              <Route path="/customers"> <Customers/> </Route>
              <Route path="/library"><Library selectMovie={this.selectedMovieCallback} unselectMovie={this.unselectMovieCallback} selectedMoviesState={this.state.selectedMovies}/></Route>
              <Route path="/movie_search"> <MovieSearch/> </Route>
              <Route path="/"><p>Home Page</p></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Store
