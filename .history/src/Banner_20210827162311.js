import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(${require('./images/banner.jpg')})`,
      }}></div>
  )
}

export default Banner
