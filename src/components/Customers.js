import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer.js';
import './Customers.css';

export class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      selectedCustomer: {},
      error: '',
    };
  }

  onSelect = (selectedCust) => {
    this.setState({
      selectedCustomer: selectedCust
    });  
    
    this.props.selectedCust(selectedCust)
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
        <Customer i={i} customer={customer} selectedCust={this.onSelect}/>
      </div>
      )
    });

    return (
      <div className="customers">
        {customerInfo}
      </div>
    )
  }
}

export default Customers
