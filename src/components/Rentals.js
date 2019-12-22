import React, { Component } from 'react'
import axios from 'axios';
import Rental from './Rental.js';
import './Rental.css';
import { Table } from 'react-bootstrap';

export class Rentals extends Component {
  constructor() {
    super();

    this.state = {
      rentals: []
    };
  };

  componentDidMount() {
    const rentalsURL = 'http://localhost:3000/rentals'
    axios.get(rentalsURL).then((response) => {
      this.setState({
        rentals: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });
  }

  render() {
    
    let rentalsList = this.state.rentals.map((rental, i) => {
      return (
        < Rental rental={rental} key={i} />
      )}
    );

    return (
      <Table striped bordered hieght='300'>
          <thead className="thead-dark">
            <tr>
              <th>Rental Id</th>
              <th>Checkout Date</th>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Due Date</th>
              <th>Movie Id</th>
              <th>Movie Title</th>
              <th>Returned</th>
            </tr>
          </thead>
          <tbody>
            {rentalsList}
          </tbody> 
      </Table>
    )
  }
};

export default Rentals
