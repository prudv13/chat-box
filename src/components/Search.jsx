import React, { Fragment, useState } from 'react';
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebase';
import Chats from './Chats';

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName));
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUser(doc.data());
      });
    }catch(error){
      console.log(error);
      setError(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  return (
    <Fragment>
      <div className='search'>
        <div className='search-form'>
          <input 
            type='text' 
            placeholder='Find a user' 
            onChange={e => setUserName(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
        {error && <span>User not found!</span>}
        {user && (
        <div className='user-chat'>
          <img src={user.photoURL} alt='user' className='user-img' />
          <div className='user-chat-info'>
            <span>{user.displayName}</span>
          </div>
        </div>
        )}
      </div>
    </Fragment>
  )
}

export default Search;