import React, { Component } from 'react'
import './Customer.css';
import { tr } from 'react-bootstrap';


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
      return <input onClick ={this.unSelect} type="submit" value="Select/Unselect" />
    } else {
      return <input onClick ={this.onSelect} type="submit" value="Select/Unselect" />
    }
  }

  render() {
    const {id, name, address, city, state, postal_code, phone, 
      account_credit, movies_checked_out_count  } = this.props.customer
    return (
      <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{address}</td>
          <td>{city}</td>
          <td>{state}</td>
          <td>{postal_code}</td>
          <td>{phone}</td>
          <td>{account_credit}</td>
          <td>{movies_checked_out_count}</td>
          <td>{this.showButton()}</td>
      </tr>
    )
  }
}

export default Customer
