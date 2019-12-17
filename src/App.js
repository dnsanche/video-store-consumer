import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Customers from './components/Customers.js';


class App extends Component {
  render() {
    return (
    // <Router>     
    // <Route path="/customers" Component={Customers}/>
    <Customers/> 
    // </Router>
    );
  }
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
