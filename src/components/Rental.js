import React, { Component } from 'react'

export class Rental extends Component {

  constructor(props) {
    super(props);
  
  };

  render() {
    const { checkout_date, customer_id, customer_name, due_date, id, movie_id, movie_title, returned } = this.props.rental;
    
   
    return (
      <tr>
        <td> {id} </td>
        <td> {checkout_date}</td>
        <td> {customer_id}</td>
        <td> {customer_name}</td>
        <td> {due_date}</td>
        <td> {movie_id}</td>
        <td> {movie_title}</td>
        <td> { returned === true ? "True:" : "False" }</td>
      </tr>
    )
  }
}

export default Rental
