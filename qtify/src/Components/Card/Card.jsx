import React from 'react'
import './Card.css'

const Card = () => {
  return (
   
      <div className='card'>
        <img src="data:image/jpeg;base64,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" alt="Kunal" />
        <div className='followers'>
          <p>100 Follows</p>
        </div>
        <p className='catagory'> New Bollywood </p>
      </div>
  )
}

export default Card
