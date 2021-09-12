import React from 'react'
import Nav from '../Nav'
import avatar2 from '../images/Netflix_avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

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
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
