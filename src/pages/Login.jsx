import React, { useState } from 'react'
import ChatBox from '../assets/chatbox-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }
    catch(error){
      console.log(error)
      setError(true);
    }
  }

  return (
    <div className='form-container'>
        <div className='form-wrapper'>
        <img src={ChatBox} className='logo' />
        <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
                {error && <span>Something went wrong!</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login;