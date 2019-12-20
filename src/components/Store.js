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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron, Container } from 'react-bootstrap';
import './Store.css';

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
    this.setState({	
      selectedMovie: {}	
    });
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
        <Router>
          <section>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand className="spacing">
              <Link to="/"> Home </Link>
                <Link to="/customers"> Customers </Link> 
                <Link to="/library"> Library </Link> 
                <Link to="/rentals"> Rentals </Link>
                <Link to="/movie_search"> Search Movies </Link> 
              </Navbar.Brand>
            </Navbar>
            </section>
            <Container className="logo">
            </Container>
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
    )
  }
}

export default Store
