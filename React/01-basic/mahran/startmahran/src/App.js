import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Emoji from 'react-emoji-render'
import './App.css';

import Nav from './view/components/nav/Nav';
import Nav2 from './view/components/nav/Nav-2';
import Input from './view/components/Input/Input';
import Output from './view/components/Output/Output'


function App(props) {
  const {name, lastname} = props;

  const [output, setOutput] = useState([]); 

  const onInputChane = e => {
    console.log(e.currentTarget.value);
  }
  return (
  <div>
  <div className="container">
   <input id="inputText"></input> 
    <button  onClick={onSendMsg} id="sendButton">send</button>

  </div> 
  
  <div id="output">

 
    {
      output.map( (sValue, index) => {
        return <Output key={index} sValue={sValue} />
      }

      )
    }
    

  </div>
  </div>

  )

  function onSendMsg(event) {
    const inputTest = event.currentTarget.value;
    const vInput = document.getElementById("inputText").value;
    fetch('/api/getUser', {
      
      method: 'POST',
      body: JSON.stringify({  vInput  }),
      headers: {
        'Content-Type': 'application/json'
    }

    }).then(res => res.json())
      .then( data => {
        console.log(data); 
        setOutput(data);
      })



    //set the output to the screen:
  //  setOutput([...output, vInput ])

  }

  
}

export default App;
