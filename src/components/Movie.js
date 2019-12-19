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
    const selectCheckbox = <div>
      <label>Select Movie <input type="checkbox" checked={this.props.selected} onChange={this.selectMovie}></input></label>
    </div>

    return (
     <Card style={{width: '18em'}}>
       <Card.Body>
        <Card.Img variant="top" src={this.props.imageUrl}/>
        { selectCheckbox }
        <Card.Title>{this.props.selected}</Card.Title>
        <Card.Text>Id: {this.props.id}</Card.Text>
        <Card.Text>Overview: {this.props.overview}</Card.Text>
        <Card.Text>Release Date: {this.props.release_date}</Card.Text>
        <Card.Text>External Id:{this.props.external_id}</Card.Text>
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
  releaseDate: propTypes.instanceOf(Date).isRequired,
  externalId: propTypes.number.isRequired,
  selected: propTypes.bool,
  selectedMovieCallback: propTypes.func.isRequired,
  unselectedMovieCallback: propTypes.func.isRequired
}
export default Movie