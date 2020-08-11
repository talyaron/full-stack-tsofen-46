import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageCard from './view/components/MessageCard/MessageCard';
 import messages from './data/messages'
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
    <body>
    <div className="App">
    <h1>Fake WhatsApp (^_*) </h1>

    <div className='msg-wrapper'>
        {
          messages.map((tweet, index) => {
            return <MessageCard key={index} msgInfo={tweet} />
          })

        }
      </div>

    </div></body>
  );
}

export default App;
