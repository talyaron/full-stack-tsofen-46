import React, { useEffect, useState } from 'react';

import './App.css';

//components
import Message from './Message/Message';




function App() {


 
  const [messages, setMessages] = useState([]);

  //call only on first time the component loads
  useEffect(() => {
   
     
   

  }, [])

  return (
    <div>
     <form onSubmit={handleSubmit}>
       <input type='text' name='input' />
       <input type='submit' value='OK'  />
       <button type='submit'>OK</button>
     </form>
     {
       messages.map((message, index)=>{
         return(<Message key={index} message={message}/>)
       })
     }
    </div>



  );


  function handleSubmit(e){
    e.preventDefault();
    setMessages([...messages,{text:e.target.elements.input.value, time:new Date()}]);
    e.target.elements.input.value = '';
  }
}



export default App;
