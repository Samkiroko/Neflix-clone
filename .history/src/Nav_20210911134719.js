import React, { useEffect, useState } from 'react'
import './Nav.css'
import netflix from './images/netflix_image.png'
import avatar from './images/Netflix_avatar.png'
import { useHistory } from 'react-router'

const Nav = () => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => {
      window.removeEventListener('scroll', transitionNavBar)
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img className='nav__logo' src={netflix} alt='Logo' />
        <img onClick={() => history.push('/profile')} className='nav__avatar' src={avatar} alt='Avatar' />
      </div>
    </div>
  )
}

export default Nav
