import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer.js';
import './Customers.css';
import { Table, Row } from 'react-bootstrap';


export class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      selectedCustomer: {},
      error: '',
    };
  }

  selectCustomer = (selectedCust) => {
    this.setState({
      selectedCustomer: selectedCust
    });  
    
    this.props.selectedCust(selectedCust)
  }

  unSelect = () => {
    this.setState({
      selectedCustomer: {}
    });  
    this.props.unSelect()
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
        <Customer i={i} customer={customer} selectedCust={this.selectCustomer} unSelect={this.unSelect}/>
      )
    });

    return (
      <Table striped bordered hieght='300'>
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Postal Code</th>
            <th>Phone</th>
            <th>Account Credit</th>
            <th>Movies Checked Out Count</th>
            <th>Select Customer</th>
          </tr>
        </thead>
        <tbody>
        {customerInfo}
         
        </tbody>
      </Table>
    )
  }
}

export default Customers
