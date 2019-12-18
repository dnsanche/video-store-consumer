import React, { Component } from 'react'

export class Customer extends Component {
  render() {
    const {id, name, address, city, state, postal_code, phone, 
      account_credit, movies_checked_out_count  } = this.props.customer
    return (
      <div>
        <div>
        <h1>Customer #{this.props.i + 1}</h1>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Postal Code: {postal_code}</p>
        <p>Phone: {phone}</p>
        <p>Account Credit: {account_credit}</p>
        <p>Movies Checked Out: {movies_checked_out_count}</p>
        <br></br>
      </div>
      </div>
    )
  }
}

export default Customer
