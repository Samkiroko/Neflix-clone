import React from 'react'
import './Nav.css'
import netflix from './images/netflix_image.png'
import avatar from './images/Netflix_avatar.png'

const Nav = () => {
  return (
    <div className='nav'>
      <img className='nav__logo' src={netflix} alt='Logo' />
      <img className='nav__avatar' src={avatar} alt='Avatar' />
    </div>
  )
}

export default Nav
