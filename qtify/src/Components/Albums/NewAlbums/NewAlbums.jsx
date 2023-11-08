import React from 'react'
import './NewAlbums.css'
import Slider from '../../Slider/Slider'

const NewAlbums = () => {
  return (
    <div className='onealbum'>
        <div className='tophead'>
        <p>New Albums</p>
        <p className='collapse'>Collapse</p>
      </div>
      <div className='topalbums'>
        <Slider  />
      </div>
    </div>
  )
}

export default NewAlbums