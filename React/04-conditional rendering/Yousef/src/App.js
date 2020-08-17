import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';


function App() {

  const messages = [
  {isMe:true , text:"Hello Tal" , author:"Yousef Khatib"},
  {isMe:false , text:"Hello Yousef" , author:"Tal Yaron"},
  {isMe:true , text:"How r u?" , author:"Yousef Khatib"},
  {isMe:false , text:"I am fine" , author:"Tal Yaron"}
  ]

  return (
    <div className="message-wrapper">
      {
        messages.map((item, index) =>{
          return <Box key={index} item={item}/>
        })
      }
      
    </div>



  );
}



export default App;
