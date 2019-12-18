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
import axios from 'axios';


export class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovies: [],
      selectedCustomer: {},
      rentalCheckout: []
    };
  }

  selectedMovieCallback = (movie) => {
    let updatedSelectedMovies = this.state.selectedMovies
    updatedSelectedMovies.push(movie)
    this.setState ({
      selectedMovies: updatedSelectedMovies,
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

unSelect = () => {
  this.setState({
    selectedCustomer: {}
  });  
}

checkOut = () => {
  const title = this.state.selectedMovies[0].title;
  const customer_id = this.state.selectedCustomer.id;
  const due_date = "2020-02-03";

  // const checkoutURL = `http://localhost:3000/rentals/${title}/
  // check-out?customer_id=${customer_id}&due_date= ${due_date}`;
  
  const checkoutURL = `http://localhost:3000/rentals/${title}/check-out`;

  axios.post(checkoutURL, {
    customer_id: customer_id, 
    due_date: due_date }).then((response) => { 
    
    let checkout = this.state.rentalCheckout
    checkout.push(response.data)
    this.setState({
      rentalCheckout: checkout,
    });
  })
  .catch((error) => {
    this.setState({ error: error.message });    
  });
  console.log(this.state.rentalCheckout)
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
            <input onClick ={this.checkOut} type="submit" value="Checkout" />
            <section>
            <Switch>
              <Route path="/customers"> <Customers selectedCust={this.onSelect} unSelect={this.unSelect}/> </Route>
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
