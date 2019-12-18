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
import SelectedCustomer from './SelectedCustomer.js';

export class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovies: [],
      selectedCustomer: {},
    };
  }

  selectedMovieCallback = (movie) => {
    let updatedSelectedMovies = this.state.selectedMovies
    updatedSelectedMovies.push(movie)

    this.setState ({
      selectedMovies: updatedSelectedMovies,
      selectedCustomer: selectedCust
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

onSelect = (selectedCust) => {
  this.setState({
    selectedCustomer: selectedCust
  });  
}

  render() {
    return (
      <div>
        <Router>
          <section>
            <nav>
              <ul>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/customers"> Customers </Link> </li>
                <li> <Link to="/library"> Library </Link> </li>
                <li> <Link to="/movie_search"> Search Movie </Link></li>
              </ul>
            </nav>
            <p>Selected Movies: </p>
            <ul>{ this.state.selectedMovies.map((movie) => <li>{movie.title}</li>)}</ul>
            <section>
            < SelectedCustomer customer={this.state.selectedCustomer}/>
            </section>
            <section>
            <Switch>
              <Route path="/customers"> <Customers selectedCust={this.onSelect}/> </Route>
              <Route path="/library"><Library selectMovie={this.selectedMovieCallback} unselectMovie={this.unselectMovieCallback} selectedMoviesState={this.state.selectedMovies}/></Route>
              <Route path="/movie_search"> <MovieSearch/> </Route>
              <Route path="/"><p>Home Page</p></Route>
            </Switch>
            </section>
          </section>
        </Router>
      </div>
    )
  }
}

export default Store
