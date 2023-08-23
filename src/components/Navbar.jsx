import React, { useContext } from 'react'
import ChatBox from '../assets/chatbox-logo.png';
import UserAvatar from '../assets/user1.png';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <img src={ChatBox} alt='chatbox-logo' className='logo' />
      <div className='user'>
        <img src={currentUser.photoURL} alt='user-image' />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;