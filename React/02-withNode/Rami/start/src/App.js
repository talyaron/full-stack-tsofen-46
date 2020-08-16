import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';

let index = 0

function App() {
  const [input,setInput] = useState([]);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' name='name' />
        <input type='submit' value='OK' />
        {input}
      </form>
    </div>
  );

  function handleSubmit(e){
    e.preventDefault();
    let {name} = e.target.elements;
    index ++;
    let temp =  <p key={index}>{name.value}</p>
    setInput([...input,temp]);
  }
}

 

export default App;
