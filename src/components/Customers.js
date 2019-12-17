import React, { Component } from 'react';
import axios from 'axios';

export class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      error: '',
    };
  }

  componentDidMount() {
    const customers = 'http://localhost:3000/customers'
    axios.get(customers).then((response) => {
      this.setState({
        customers: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });
  }

  render() {

    const customerInfo = this.state.customers.map((customer, i) => {
      return (
      <div>
      <h1>Customer #{i + 1}</h1>
      <p>Id: {customer.id}</p>
      <p>Name: {customer.name}</p>
      <p>Address: {customer.address}</p>
      <p>City: {customer.city}</p>
      <p>State: {customer.state}</p>
      <p>Postal Code: {customer.postal_code}</p>
      <p>Phone: {customer.phone}</p>
      <p>Account Credit: {customer.account_credit}</p>
      <p>Movies Checked Out: {customer.movies_checked_out_count}</p>
      <br></br>
      </div>
      )
    });

    return (
      <div>
        {customerInfo}
      </div>
    )
  }
}

export default Customers
