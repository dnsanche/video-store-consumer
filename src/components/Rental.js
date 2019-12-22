import React from 'react';

const Rental = ( props ) => {
  const { checkout_date, customer_id, customer_name, due_date, 
    id, movie_id, movie_title, returned, key } = props.rental;
    
  return (
    <tr key={key}>
      <td> {id} </td>
      <td> {checkout_date}</td>
      <td> {customer_id}</td>
      <td> {customer_name}</td>
      <td> {due_date}</td>
      <td> {movie_id}</td>
      <td> {movie_title}</td>
      <td> {returned === true ? "True" : "False" }</td>
    </tr>
  )
}

export default Rental
