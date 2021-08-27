import React from 'react'
import './Banner.css'
import banner from './images/banner.jpg'

const Banner = () => {
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center center',
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button>Play</button>
          <button>My List</button>
        </div>
      </div>
    </header>
  )
}

export default Banner
