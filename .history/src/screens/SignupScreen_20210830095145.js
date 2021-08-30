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
      </form>
    </div>
  )
}

export default SignupScreen
