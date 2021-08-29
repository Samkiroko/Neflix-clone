import React from 'react'
import './LoginScreen.css'
import login_image from '../images/banner.jpg'

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img src={login_image} alt='login' />
      </div>
    </div>
  )
}

export default LoginScreen
