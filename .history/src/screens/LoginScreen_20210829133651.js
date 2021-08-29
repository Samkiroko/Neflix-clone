import React from 'react'
import './LoginScreen.css'
import login_image from '../images/netflix_image.png'

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img className='loginScreen__logo' src={login_image} alt='login' />
      </div>
    </div>
  )
}

export default LoginScreen
