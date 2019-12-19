import React, { Component } from 'react'

export class Rental extends Component {

  constructor(props) {
    super(props);
  };


  render() {
    console.log(this.props.rental)
    const { checkout_date, customer_id, customer_name, due_date, id, movie_id, movie_title, returned } = this.props.rental
    
    return (
      <div>
        <p> Id: {id} </p>
        <p> Checkout Date: {checkout_date} </p>
        <p> Customer Id: {customer_id} </p>
        <p> Customer Name: {customer_name}</p>
        <p> Due Date: {due_date}</p>
        <p> Move Id: {movie_id}</p>
        <p> Move Title: {movie_title}</p>
        <p> Returned: {returned}</p>
      </div>
    )
  }
}

export default Rental
