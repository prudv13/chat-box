import React from 'react'
import ChatBox from '../assets/chatbox-logo.png';

const Login = () => {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
        <img src={ChatBox} className='logo' />
        <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;