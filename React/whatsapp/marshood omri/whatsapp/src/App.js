import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageCard from './view/components/MessageCard/MessageCard';
import messages from './data/messages'
import msginputbox from './view/components/msginput/msginput';
import './view/components/msginput/msginput.css';


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
      <div className="InputMessageCard">        <div className="InputMessageCard">
        <div className="mm">
          <img className="img1" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK9-EDH1XQw_OSQWzP9uilxJFAem_nN3irhg&usqp=CAU" alt="" ></img>
        </div>
        <div className="formDiv" >
          <form onSubmit={handleMsg}>
            <input type="text" placeholder="Send a message " name='textI' />
            <input type="submit" value="Send" ></input>
          </form>
        </div>
      </div>

      </div>
    </div>


  );

  function handleMsg(e) {
    e.preventDefault();
    let { textI } = e.target.elements;

    let newTweet = { Twitt: textI.value, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK9-EDH1XQw_OSQWzP9uilxJFAem_nN3irhg&usqp=CAU", name: "Taima" }
    setTweet([...tweet, newTweet])  
    console.log("Taaaaaal" + newTweet)
  }
}
export default App;
