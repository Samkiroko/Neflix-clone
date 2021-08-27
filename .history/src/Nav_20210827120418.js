import React from 'react'
import './Nav.css'
import netflix from './images/netflix_image.png'
import Avatar from './images/Netflix-avatar'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={Avatar} alt='Avatar' />
      <img src={netflix} alt='Logo' />
      <h1>This is the nav</h1>
    </div>
  )
}

export default Nav
