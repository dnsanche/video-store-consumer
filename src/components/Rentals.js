import React, { Component } from 'react'
import axios from 'axios';
import Rental from './Rental.js';

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
        <div key={i}>
          <Rental rental={rental}/>
        </div>
      )}
    );

    return (
      <div>
        {rentalsList}
      </div>
    )
  }
};

export default Rentals
