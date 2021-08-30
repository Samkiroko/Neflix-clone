import React from 'react'
import './SignupScreen.css'

const SignupScreen = () => {
  return (
    <div className='signupScreen'>
      <form>
        <h1>sign In</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Sign In</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix?</span>{' '}
          <span className='signupScreen__link'>Sign Up now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen
