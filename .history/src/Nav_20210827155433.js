import React, { useState } from 'react'
import './Nav.css'
import netflix from './images/netflix_image.png'
import avatar from './images/Netflix_avatar.png'

const Nav = () => {
  const [show, setShow] = useState(false)
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useState(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => {
      window.removeEventListener('scroll', transitionNavBar)
    }
  }, [])

  return (
    <div className='nav nav__black'>
      <div className='nav__contents'>
        <img className='nav__logo' src={netflix} alt='Logo' />
        <img className='nav__avatar' src={avatar} alt='Avatar' />
      </div>
    </div>
  )
}

export default Nav
