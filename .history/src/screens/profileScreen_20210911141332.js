import React from 'react'
import Nav from '../Nav'
import avatar2 from '../images/Netflix_avatar.png'

const ProfileScreen = () => {
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit profile</h1>
        <div className='profileScreen__info'>
          <img src={avatar2} alt='avatar' />
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
