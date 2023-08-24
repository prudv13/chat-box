import React, { useContext } from 'react'
import {AiFillVideoCamera} from 'react-icons/ai';
import {BsPersonFillAdd} from 'react-icons/bs';
import {FiMoreHorizontal} from 'react-icons/fi';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chat-info'>
        <span>{data.user?.displayName}</span>
        <div className='chat-icons'>
          <AiFillVideoCamera className='chat-icon' />
          <BsPersonFillAdd className='chat-icon' />
          <FiMoreHorizontal className='chat-icon' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;