import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageCard from './view/components/MessageCard/MessageCard';
 import messages from './data/messages'
 console.log(messages)
function App() {
  return (
    <body>
    <div className="App">
    <h1>Fake WhatsApp (^_*) </h1>

    <div className='msg-wrapper'>
        {
          messages.map((newsItem, index) => {
            return <MessageCard key={index} msgInfo={newsItem} />
          })

        }
      </div>

    </div></body>
  );
}

export default App;
