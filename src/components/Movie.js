import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Movie extends Component {
  
  selectMovie = (event) => {
    if (event.target.checked) {
      this.props.selectedMovieCallback(this.props.id)
    } else {
      this.props.unselectedMovieCallback(this.props.id)
    }
  }

  render() {
    const selectCheckbox = <div>
      <input type="checkbox" checked={this.props.selected} onChange={this.selectMovie}></input>
    </div>

    return (
      <div>
        { selectCheckbox }
        <p>{this.props.selected}</p>
        <img src={this.props.imageUrl}></img>
        <h1>Title: {this.props.title}</h1>
        <p>Id: {this.props.id}</p>
        <p>Overview: {this.props.overview}</p>
        <p>Release Date: {this.props.release_date}</p>
        <p>External Id:{this.props.external_id}</p>
      </div>
    )  
  }
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  releaseDate: propTypes.instanceOf(Date).isRequired,
  externalId: propTypes.number.isRequired,
  selected: propTypes.bool,
  selectedMovieCallback: propTypes.func.isRequired,
  unselectedMovieCallback: propTypes.func.isRequired
}
export default Movie