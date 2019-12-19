import React, { Component } from 'react'
import axios from 'axios';
import Rental from './Rental.js';

export class Checkout extends Component {
  constructor(props) {
    super(props);
  }

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
    return (
      <section>
        <p> Selected Customer: { this.props.selectedCustomer.name } </p>
        <p> Selected Movies: { this.props.selectedMovie.title} </p>
        <input onClick ={this.checkOut} type="submit" value="Checkout" />
      </section>
    )
  }
}

export default Checkout
