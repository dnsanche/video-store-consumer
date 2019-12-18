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


export class Store extends Component {
  constructor(props) {
    super(props);

  this.state = {
    // customers: [],
  };
}

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/customers"> Customers </Link> </li>
                <li> <Link to="/library"> Library </Link> </li>
                <li> <MovieSearch/> </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/customers"> <Customers/> </Route>
              <Route path="/library"> <Library/> </Route>
              <Route path="/movie_search"> <MovieSearch/> </Route>
              <Route path="/"><p>Home Page</p></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Store
