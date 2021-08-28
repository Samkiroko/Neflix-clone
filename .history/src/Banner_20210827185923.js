import React, { useEffect, useState } from 'react'
import './Banner.css'
import banner from './images/banner.jpg'
import axios from './axios.js'

const Banner = () => {

  const [movie, setMovie] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request.)
   }, [])




  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str
  }

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
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis rem neque doloremque beatae
          tempora tempore in reiciendis officia fuga. Illo hic laudantium consequatur, recusandae quidem neque aut
          blanditiis soluta.`,
            150,
          )}
        </h1>
      </div>
      <div className='banner__fadeBottom' />
    </header>
  )
}

export default Banner
