import React, { Component } from 'react'
import axios from 'axios';
import Rental from './Rental.js';
import './Rental.css';

export class Rentals extends Component {

  constructor(props) {
    super(props);

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
          <Rental rental={rental}/>
      )}
    );

    return (
      <section className="rentals-container">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Rental Id</th>
              <th>Checkout Date</th>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Due Date</th>
              <th>Move Id</th>
              <th>Move Title</th>
              <th>Returned</th>
            </tr>
          </thead>
          <tbody>
            {rentalsList}
          </tbody>
        </table>
      </section>
    )
  }
};

export default Rentals
