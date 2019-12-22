import React, { Component } from 'react'
import axios from 'axios';
import './Checkout.css';
import propTypes from 'prop-types';

export class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }
  };

  checkOut = () => {
    
    const title = this.props.selectedMovie.title;
    const customer_id = this.props.selectedCustomer.id;
    const due_date = "2020-02-03";
    const checkoutURL = `http://localhost:3000/rentals/${title}/check-out`;

    axios.post(checkoutURL, {
      customer_id: customer_id, 
      due_date: due_date }).then(
        this.props.addRentalCallback()
    ).catch((error) => {
      this.setState({ error: error.message });    
    });
  }

  render() {

    const showCustomer = 
      <p> Selected Customer: { this.props.selectedCustomer.name } </p>
     

    const showMovie = 
      <p> Selected Movies: { this.props.selectedMovie.title} </p>
      
    const showButton = 
        <input onClick ={this.checkOut} type="submit" value="Checkout"/>
     
    if ( this.props.checkoutMovie + this.props.checkoutCustomer === 2) { 
      return ( 
      <div class="alert alert-success" role="alert">
        <div>
          <h2>You are ready for checkout!</h2>
          { showCustomer } 
          { showMovie }
          { showButton }  
        </div>  
      </div>   
      )} 
    else if ( this.props.checkoutMovie + this.props.checkoutCustomer === 1 ) {
      return ( 
        <div class="alert alert-warning" role="alert">
          <h2>Please select a movie and a customer to complete checkout. </h2>
          { showCustomer } 
          { showMovie }        
        </div>  ) } 
    else { 
      return (
        <header className="store_name"> 
          <h1> Welcome to Dani's and Mariya's Video Store. </h1>      
        </header>
      ) 
    }
  }
};

Checkout.propTypes = {
  checkoutMovie: propTypes.number.isRequired,
  checkoutCustomer: propTypes.number.isRequired,
  selectedCustomer: propTypes.object.isRequired,
  selectedMovie: propTypes.object.isRequired
}

export default Checkout
