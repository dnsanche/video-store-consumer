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
import Library from './components/Library.js';
import MovieSearch from './components/MovieSearch';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
    };
  }

  /*searchList = () => {
    return this.state.movieList.filter((movie) => {
      const text = (`${movie.title}`).toLowerCase();

      return text.includes(this.state.searchTerm.toLowerCase());
    });
  } */

  render() {
    return (
      <Router>
      <div>
      <nav>
        <MovieSearch />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
        </ul>
      </nav>

     <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/movie_search">
            <MovieSearch />
          </Route>
          <Route path="/" >
            <p>Home Page</p>
          </Route>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
