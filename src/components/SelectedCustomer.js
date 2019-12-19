import React, { Component } from 'react'
import Customer from './Customer.js';

export class SelectedCustomer extends Component {
  render() {
  
    return (
      <div>
        Selected Customer: { this.props.customer.name }
      </div>
    )
  }
}

export default SelectedCustomer
