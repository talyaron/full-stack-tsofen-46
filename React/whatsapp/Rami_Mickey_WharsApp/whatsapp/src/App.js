// import React from 'react';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import camera from './images/camera.jpg'
import call from './images/call.jpg'
import chat from './images/chat.jpg'
import settings from './images/settings.jpg'
import status from './images/status.png'
import './App.css';
import { GetMessages } from './view/components/messages/Mesaages';


// const conversations = [{ img: 'https://cdnb.artstation.com/p/assets/images/images/001/863/575/medium/irakli-nadar-artstation-da.jpg?1453903033', name: 'Lana', msg: 'hi how are you?' }, 
// { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Moran', msg: 'I am home , where are you?' },
//  { img: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Rola', msg: 'what are you doing?' },
//  { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Moran', msg: 'I am home , where are you?' },
//  { img: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Rola', msg: 'what are you doing?' },
//  { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Moran', msg: 'I am home , where are you?' },
//  { img: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Rola', msg: 'what are you doing?' }
// ]
function App() {
  const [conversations,setConversation]=useState([]);

  useEffect(()=>{
    fetch('/api/conversations')
    .then(data=> data.json())
    .then(data=>{
      setConversation(data);
    })
  },[])
  return (
    <div>
      <h1>WhatsApp</h1>
      {
        conversations.map((msgItem, index) => {
          return <GetMessages key={index} msgItem={msgItem} />
        })
      }
      <div className="btn-group"  >
        <button ><img src={settings} alt='settings' /></button>
        <button ><img src={chat} alt='chat' /></button>
        <button><img src={camera} alt='camera' /></button>
        <button ><img src={call} alt='call' /></button>
        <button ><img src={status} alt='status' /></button>
      </div>
    </div>
  );
}

export default App;
