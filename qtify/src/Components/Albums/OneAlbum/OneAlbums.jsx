import React from 'react'
import './OneAlbums.css'
import Slider from '../../Slider/Slider'

const TopAlbums = (props) => {
  return (
    <div className='onealbum'>
        <div className='tophead'>
        <p>{props.title}</p>
        <p className='collapse'>Collapse</p>
      </div>
      <div className='topalbums'>
        <Slider  />
      </div>
    </div>
  )
}

export default TopAlbums