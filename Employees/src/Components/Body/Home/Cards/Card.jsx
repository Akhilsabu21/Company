import React from 'react';
import './Card.css'

const Card = () => {
  return (
    <div className="container card-container">
      
      <div className="emp-id">
            <h3>Id</h3>
        </div>
        <div className="emp-name">
            <h3>Name</h3>
        </div>
        <div className="btns">
            <button id='edit'>Edit</button>
            <button id='view'>View</button>
            <button id='del'>Delete</button>
        </div> 

    </div>
  )
}

export default Card
