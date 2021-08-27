import React from 'react'
import './Banner.css'
import banner from './images/banner.jpg'

const Banner = () => {
  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url({banner})`,
        backgroundPosition: 'center center',
      }}></div>
  )
}

export default Banner
