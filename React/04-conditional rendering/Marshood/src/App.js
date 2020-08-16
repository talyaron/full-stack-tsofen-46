import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';
let messages = [
  { "isMe": true, "text": "hola", "author": "MMMM" },
  { "isMe": false, "text": "hola false", "author": "MMfalseMM" },
  { "isMe": true, "text": "hola ", "author": "MMMM" },
  { "isMe": false, "text": "holafalse ", "author": "MMfalseMM" },
  { "isMe": true, "text": "hola", "author": "MMMM" },
  { "isMe": false, "text": "hola false", "author": "MMMfalseM" }
];

function App() {

  return (
    <div>
      <div className="mainBox" >
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {
          messages.map((element, index) => {

            return (<Box key={index} number={element} />)
          })

        }

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>



  );
}



export default App;
