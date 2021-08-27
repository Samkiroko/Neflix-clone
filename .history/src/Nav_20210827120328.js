import React from 'react'
import './Nav.css'
import netflix from './images/netflix_image.png'

const Nav = () => {
  return (
    <div className='nav'>
      <img src='././images/Netflix-avatar.png' alt='Avatar' />
      <img src={netflix} alt='Logo' />
      <h1>This is the nav</h1>
    </div>
  )
}

export default Nav
