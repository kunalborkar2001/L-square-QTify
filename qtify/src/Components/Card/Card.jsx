import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
      <div>
      <div className='card'>
        <img src={props.image} alt="Image Not Found" />
        <div className='followers'>
          <p>{props.follows}</p>
        </div>
      </div>
        <p className="category">{props.title}</p>
      </div>
  )
}

export default Card
