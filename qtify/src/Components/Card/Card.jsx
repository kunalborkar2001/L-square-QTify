import React from 'react'
import './Card.css'
import Logo from "../../Images/Logo"

const Card = (props) => {
  return (
      <div>
      <div className='card'>
      <img src={props.image} alt={<Logo />}   />
        <div className='followers'>
          <p>{props.follows} Follows</p>
        </div>
      </div>
        <p className="category">{props.title}</p>
      </div>
  )
}

export default Card
