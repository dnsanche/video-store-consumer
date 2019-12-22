import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export class Movie extends Component {
  
  selectMovie = (event) => {
    if (event.target.checked) {
      this.props.selectedMovieCallback(this.props.id)
    } else {
      this.props.unselectedMovieCallback(this.props.id)
    }
  }

  render() {
    const selectCheckbox = 
      <label>Select Movie <input type="checkbox" checked={this.props.selected} onChange={this.selectMovie}></input></label>


    return (
     <Card style={{width: '20em'}} >
       <Card.Body>
        <Card.Img variant="top" src={this.props.imageUrl}/>
        <span>
          <Card.Title>{this.props.title}</Card.Title> 
          <Card.Text>{selectCheckbox } </Card.Text>
        </span>
        <Card.Text>ID: {this.props.id}</Card.Text>
        <Card.Text>Overview: {this.props.overview}</Card.Text>
        <Card.Text>Release Date: {this.props.release_date}</Card.Text>
        {this.props.selected}
       </Card.Body>
      </Card>
    )  
  }
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  release_date: propTypes.string.isRequired,
  external_id: propTypes.number.isRequired,
  selected: propTypes.bool,
  selectedMovieCallback: propTypes.func.isRequired,
  unselectedMovieCallback: propTypes.func.isRequired
}
export default Movie