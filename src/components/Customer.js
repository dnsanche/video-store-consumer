import React, { Component } from 'react'
import './Customer.css';

export class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: {},
    };
  }

  onSelect = () => {
    const selectedCust = this.props.customer
    this.setState({
      selectedCustomer: selectedCust,
    });

    this.props.selectedCust(selectedCust)
  }

  unSelect = () => {

    this.setState({
      selectedCustomer: {},
    });

    this.props.unSelect()
  }

  showButton = () => {
    if (this.state.selectedCustomer === this.props.customer) {
      return <input onClick ={this.unSelect} type="submit" value="Unselect" />
    } else {
      return <input onClick ={this.onSelect} type="submit" value="Select" />
    }
  }

  render() {
    const {id, name, address, city, state, postal_code, phone, 
      account_credit, movies_checked_out_count  } = this.props.customer
    return (
      <section className="customer">
          <h1> {name}</h1>
          <p>Id: {id}</p>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Postal Code: {postal_code}</p>
          <p>Phone: {phone}</p>
          <p>Account Credit: {account_credit}</p>
          <p>Movies Checked Out: {movies_checked_out_count}</p>       
          { this.showButton() }         
      </section>
    )
  }
}

export default Customer
