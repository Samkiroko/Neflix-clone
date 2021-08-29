import React from 'react'
import './LoginScreen.css'
import login_image from '../images/netflix_image.png'

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img className='loginScreen__logo' src={login_image} alt='logo' />
        <button className='loginScreen__button'>Sign In</button>
        <div className='loginScreen__gradient' />
      </div>
    </div>
  )
}

export default LoginScreen
