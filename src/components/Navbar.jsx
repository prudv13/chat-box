import React from 'react'
import ChatBox from '../assets/chatbox-logo.png';
import UserAvatar from '../assets/user1.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={ChatBox} alt='chatbox-logo' className='logo' />
      <div className='user'>
        <img src={UserAvatar} alt='' />
        <span>Prudhvi</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;