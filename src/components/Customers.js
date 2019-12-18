import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer.js';

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
      <Customer i={i} customer={customer}/>
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
