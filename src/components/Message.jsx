import React from 'react'
import Jake from '../assets/user2.png';
import Sam from '../assets/user3.png';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='message-info'>
        <img src={Jake} alt='user' />
        <span>just now</span>
      </div>
      <div className='message-content'>
        <p>Hello</p>
        <img src={Sam} alt='user' />
      </div>
    </div>
  )
}

export default Message;