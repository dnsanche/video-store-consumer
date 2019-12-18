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
      selectedMovies: []
    };
  }

  selectedMovieCallback = (movie) => {
    let updatedSelectedMovies = this.state.selectedMovies
    updatedSelectedMovies.push(movie)

    this.setState ({
      selectedMovies: updatedSelectedMovies
    }) 
  }

  unselectMovieCallback = (movie) => {
    const updatedSelectedMovies = this.state.selectedMovies.filter((movieTarget) => {
      return movie.id === movieTarget.id ? false : true 
    })

    this.setState ({
      selectedMovies: updatedSelectedMovies
    })
  }

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
        <p>Selected Movies:</p>
        <ul>
          { this.state.selectedMovies.map((movie) => <li>{movie.title}</li>) }
        </ul>
      </nav>

     <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/library">
            <Library selectMovie={this.selectedMovieCallback} unselectMovie={this.unselectMovieCallback} selectedMoviesState={this.state.selectedMovies}/>
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
