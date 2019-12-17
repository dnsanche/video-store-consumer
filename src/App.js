import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Link } from 'react-router-dom'
import Customers from './components/Customers.js';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
        </ul>
      </nav>

     <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
        
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
