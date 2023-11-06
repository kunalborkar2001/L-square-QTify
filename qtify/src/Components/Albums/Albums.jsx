import React from 'react'
import './Albums.css'
import TopAlbums from './OneAlbum/OneAlbums'


const Albums = () => {
  return (
    <div className='albums'>
      <TopAlbums title = {"Top Albums"}/>
      <TopAlbums title = {"New Albums"}/>
      
    </div>
  )
}

export default Albums