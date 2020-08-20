
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatMsg from './view/components/ChatMsg/ChatMsg';


function App() {

  const [chats, setChats] = useState([]);
  const [counter, setCounter] = useState(0)

  useEffect( () => {
    fetch('/api/getChats')
      .then(res => res.json())
      .then( data => {
        console.log(data);
        setChats(data);
      })
  }, [])

  return (
    <div className="App">
      <div id="header">header</div>
      <div className="container">
        {
          chats.map((ChatItem, index) => {
            return (<ChatMsg key={index} oChatItem={ChatItem} />)
          })
        }

      </div>
    </div>
  );
}

export default App;
