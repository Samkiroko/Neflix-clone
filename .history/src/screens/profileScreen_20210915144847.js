import React from 'react'
import Nav from '../Nav'
import avatar2 from '../images/Netflix_avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './ProfileScreen.css'
import PlansScreen from './PlansScreen'

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit profile</h1>
        <div className='profileScreen__info'>
          <img src={avatar2} alt='avatar' />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plan'>
              <h3>Plans</h3>

              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>
                Sign out
              </button>
              <PlansScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
