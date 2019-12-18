import React, { Component } from 'react'
import Customer from './Customer.js';

export class SelectedCustomer extends Component {
  render() {
  
    return (
      <Customer customer={this.props.customer}/>
    )
  }
}

export default SelectedCustomer
