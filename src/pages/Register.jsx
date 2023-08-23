import React, { useState } from 'react'
import ChatBox from '../assets/chatbox-logo.png';
import AddImage from '../assets/add-image.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from '../firebase/firebase';

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try{
      // create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file)
      .then(
        () => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              await updateProfile(res.user,
                {
                  displayName,
                  photoURL: downloadURL,
                }
              );

              await setDoc(doc(db, "users", res.user.uid),{
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
            }
            catch(error){
              console.log(error)
              setError(true);
            }
          })
        }
      )
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
        <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input style={{display: "none"}} type='file' id='file' />
                <label htmlFor='file'>
                    <img src={AddImage} alt='add-image-icon' />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {error && <span>Something went wrong!</span>}
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;