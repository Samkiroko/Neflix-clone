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
      <div className='loginScreen__body'>
        <>
          <h1>Unlimited files, TV programmes and more</h1>
          <h2>Watch anywhere.Cancel at any time</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className='loginScreen__input'>
            <form>
              <input type='email' placeholder='Email address' />
              <button className='loginScreen__getStarted'>GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  )
}

export default LoginScreen
