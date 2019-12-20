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
import Home from './home.jpeg'

export class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: {},
      selectedCustomer: {},
      checkoutMovie: 0,
      checkoutCustomer: 0,
    };
  }

  count = () => {
    if ( this.state.selectedMovie.id == null ) { 
      this.setState ({ checkoutMovie: 1 }) 
    }
  }

  count2 = () => {
    if ( this.state.selectedCustomer.id == null ) { 
      this.setState ({ checkoutCustomer: 1 }) 
    }
  }  

  selectedMovieCallback = (movie) => {
    let updatedSelectedMovie = movie
  
    this.setState ({
      selectedMovie: updatedSelectedMovie,
    }) 

    this.count()
  }

  unselectMovieCallback = (movie) => {
    this.setState({	
      selectedMovie: {},
      checkoutMovie: 0
    });
    this.count()
  }

  selectCustomer = (selectedCust) => {
    this.setState({
      selectedCustomer: selectedCust,
    });  
    this.count2()
  }

  unSelect = () => {
    this.setState({
      selectedCustomer: 0,
      checkoutCustomer: 0
    });  
    this.count2()
  }

  addRental = () => {
    this.setState({
      selectedCustomer: 0,
      selectedMovie: 0,
      checkoutMovie: 0,
      checkoutCustomer: 0
    }); 
    this.count()
  }

  render() {
    return (
        <Router>
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet"></link>          
            <Navbar expand="lg" className="Navigation">
              <Navbar.Brand className="spacing">
                <Link to="/"> HOME </Link>
                <Link to="/customers"> CUSTOMERS </Link> 
                <Link to="/library"> LIBRARY </Link> 
                <Link to="/rentals"> RENTALS </Link>
                <Link to="/movie_search"> SEARCH MOVIES </Link> 
              </Navbar.Brand>
            </Navbar>
            <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet"></link>  
            <section>
              < Checkout  
                checkoutMovie={this.state.checkoutMovie}
                checkoutCustomer={this.state.checkoutCustomer}
                selectedCustomer={this.state.selectedCustomer} 
                selectedMovie={this.state.selectedMovie} addRentalCallback={this.addRental}/>
            </section>
            <section>
            <Switch>
                <Route path="/customers"> <Customers selectedCust={this.selectCustomer} unSelect={this.unSelect}/> </Route>
                <Route path="/library"><Library selectMovie={this.selectedMovieCallback} unselectMovie={this.unselectMovieCallback} selectedMovieState={this.state.selectedMovie}/></Route>
                <Route path="/movie_search"> <MovieSearch/> </Route>
                <Route path="/rentals"> <Rentals updateRentalsCallback={this.updateRentals}/> </Route>
                <Route path="/"><img src={Home}/></Route>
            </Switch>
            </section>
        </Router>
    )
  }
}

export default Store
