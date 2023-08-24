import React, { useContext, useState } from 'react'
import {IoMdAttach} from 'react-icons/io';
import {MdOutlineAddPhotoAlternate} from 'react-icons/md';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase/firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async () => {
    if(img){
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // setError(true)
        },
      () => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId),{
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL
            })
          })
        })
      }
    )
    }
    else {
      await updateDoc(doc(db, "chats", data.chatId),{
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        })
      })
    }

    await updateDoc(doc(db, "userChats", currentUser.uid),{
      [data.chatId + ".lastMessage"]:{
        text,
      },
      [data.chatId+".date"]: serverTimestamp()
    });

    await updateDoc(doc(db, "userChats", data.user.uid),{
      [data.chatId + ".lastMessage"]:{
        text,
      },
      [data.chatId+".date"]: serverTimestamp()
    });

    setText("");
    setImg(null);
  }
  return (
    <div className='input'>
      <input 
        type='text' 
        placeholder='Type something...' 
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <div className='send'>

        <input type='file' style={{display: "none"}} id='file' onChange={e => setImg(e.target.files[0])} />
        <label htmlFor='file'>
          <MdOutlineAddPhotoAlternate className='input-icons' />
        </label>
        <button onClick={img || text ? handleSend : null}>Send</button>
      </div>
    </div>
  )
}

export default Input;