import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageCard from './view/components/MessageCard/MessageCard';
import messages from './data/messages'
import msginputbox from './view/components/msginput/msginput';
//console.log(messages)
function App() {
  // const { msgInfo } = props;
  const [tweet, setTweet] = useState([]);

  useEffect(() => {

    fetch('/get/chats')
      .then(res => res.json())
      .then(data => {
        //set state (news)
        console.log(data)
        setTweet(data);
      })
  }, [])
  return (
  
      <div className="App">
        <h1>Fake WhatsApp (^_*) </h1>
        <div className='msg-wrapper'>
          {
            tweet.map((newsItem, index) => {
              return <MessageCard key={index} msgInfo={newsItem} />
            })
          }
        </div>
        <p> Send Message: </p>
        {
        msginputbox()
        
        
        }
      </div>
       
     
  );
}
export default App;
