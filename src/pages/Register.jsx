import React from 'react'
import ChatBox from '../assets/chatbox-logo.png';
import AddImage from '../assets/add-image.png';

const Register = () => {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
        <img src={ChatBox} className='logo' />
        <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input style={{display: "none"}} type='file' id='file' />
                <label htmlFor='file'>
                    <img src={AddImage} alt='add-image-icon' />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;