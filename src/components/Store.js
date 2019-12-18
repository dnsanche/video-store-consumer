import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Customers from './Customers.js';
import Library from './Library.js';
import MovieSearch from './MovieSearch';
import SelectedCustomer from './SelectedCustomer.js';

export class Store extends Component {
  constructor(props) {
    super(props);

  this.state = {
    selectedCustomer: {},
  };
}

onSelect = (selectedCust) => {
  this.setState({
    selectedCustomer: selectedCust
  });  
}

  render() {
    return (
      <div>
        <Router>
          <section>
            <nav>
              <ul>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/customers"> Customers </Link> </li>
                <li> <Link to="/library"> Library </Link> </li>
                <li> <Link to="/movie_search"> Search Movie </Link></li>
              </ul>
            </nav>
            </section>
            <section>
            < SelectedCustomer customer={this.state.selectedCustomer}/>
            </section>
            <section>
            <Switch>
              <Route path="/customers"> <Customers selectedCust={this.onSelect}/> </Route>
              <Route path="/library"> <Library/> </Route>
              <Route path="/movie_search"> <MovieSearch/> </Route>
              <Route path="/"><p>Home Page</p></Route>
            </Switch>
          </section>
        </Router>
      </div>
    )
  }
}

export default Store
