import React from 'react'
import Jake from '../assets/user2.png';

const Chats = () => {
  return (
    <div className='chats'>
      <div className='user-chat'>
        <img src={Jake} alt='user' className='user-img' />
        <div className='user-chat-info'>
          <span>Jake</span>
        </div>
      </div>
    </div>
  )
}

export default Chats;