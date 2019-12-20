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
import Rentals from './Rentals';
import Checkout from './Checkout';

export class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: {},
      selectedCustomer: {},
      statusCustomer: false,
      statusMovie: false,
    };
  }

  selectedMovieCallback = (movie) => {
    let updatedSelectedMovie = movie
  
    this.setState ({
      selectedMovie: updatedSelectedMovie,
      statusMovie: true
    }) 
  }

  unselectMovieCallback = (movie) => {
    return movie.id === this.state.selectedMovie.id ? false : true 
  }

  selectCustomer = (selectedCust) => {
    this.setState({
      selectedCustomer: selectedCust,
      statusCustomer: true,
    });  
  }

  unSelect = () => {
    this.setState({
      selectedCustomer: {},
      statusCustomer: false
    });  
  }

  addRental = () => {
    this.setState({
      selectedCustomer: {},
      selectedMovie: {},
      statusCustomer: false,
      statusMovie: false,
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
                <li> <Link to="/rentals"> Rentals </Link></li>
                <li> <Link to="/movie_search"> Search Movie </Link></li>
              </ul>
            </nav>
            </section>
            <section>
              < Checkout statusCustomer={this.state.statusCustomer} statusMovie={this.state.statusMovie} 
              selectedCustomer={this.state.selectedCustomer} 
              selectedMovie={this.state.selectedMovie} addRentalCallback={this.addRental}/>
            </section>
            <section>
            <Switch>
              <Route path="/customers"> <Customers selectedCust={this.selectCustomer} unSelect={this.unSelect}/> </Route>
              <Route path="/library"><Library selectMovie={this.selectedMovieCallback} unselectMovie={this.unselectMovieCallback} selectedMovieState={this.state.selectedMovie}/></Route>
              <Route path="/movie_search"> <MovieSearch/> </Route>
              <Route path="/rentals"> <Rentals updateRentalsCallback={this.updateRentals}/> </Route>
              <Route path="/"><p>Home Page</p></Route>
            </Switch>
            </section>
        </Router>
      </div>
    )
  }
}

export default Store
