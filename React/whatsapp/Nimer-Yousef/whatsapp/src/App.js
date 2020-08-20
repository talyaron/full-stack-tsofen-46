import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './view/components/header/header'
import ChatBar from './view/components/body/body'

// const {name,content,url,time,number}=props;




function App() {
  
  const [chatList, setChatList] = useState([]);
  useEffect(() => {

    fetch('/api/chats')
      .then(res => res.json())
      .then(data => {
        setChatList(data);
      })


  }, [])



  return (
    <div className="mainPage">

      <div className="top"><Header /> </div>

      <div className="chats">
        {
          chatList.map((item, index) => {
            return <ChatBar key={index} newItem={item} />
          })
        }
      </div>








    </div>
  );
}

export default App;
