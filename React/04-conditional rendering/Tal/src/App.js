import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';


function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hovers: {counter}</h1>

      <Box number={1} setCounter={setCounter} counter={counter} />
      <Box number={2} setCounter={setCounter} counter={counter} />
      <Box number={3} setCounter={setCounter} counter={counter} />
      <Box number={4} setCounter={setCounter} counter={counter}/>
      <Box number={5} setCounter={setCounter} counter={counter}/>
      <Box number={6} setCounter={setCounter} counter={counter}/>
      <Box number={7} setCounter={setCounter} counter={counter}/>
      <Box number={8} setCounter={setCounter} counter={counter}/>
    </div>



  );
}



export default App;
