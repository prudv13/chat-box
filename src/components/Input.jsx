import React from 'react'
import {IoMdAttach} from 'react-icons/io';
import {MdOutlineAddPhotoAlternate} from 'react-icons/md';

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className='send'>
        <IoMdAttach className='input-icons' />
        <input type='file' style={{display: "none"}} id='file' />
        <label htmlFor='file'>
          <MdOutlineAddPhotoAlternate className='input-icons' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input;