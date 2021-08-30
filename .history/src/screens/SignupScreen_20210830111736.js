import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SignupScreen.css'

const SignupScreen = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authuser) => {
        console.log(authuser)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const signIn = (e) => {
    e.preventDefault()
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>sign In</h1>
        <input type='email' placeholder='Email' ref={emailRef} />
        <input type='password' placeholder='Password' ref={passwordRef} />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix?</span>{' '}
          <span className='signupScreen__link' onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen
