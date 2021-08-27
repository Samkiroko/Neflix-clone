import React from 'react'
import './Nav.css'
import netflix-image from './images/netflix-image.png'

const Nav = () => {
  return (
    <div className='nav'>
      <img src='././images/Netflix-avatar.png' alt='Avatar' />
      <img src={ netflix-image} alt='Logo' />
      <h1>This is the nav</h1>
    </div>
  )
}

export default Nav
