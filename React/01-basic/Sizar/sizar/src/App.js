import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Nav from './view/components/Nav/nav';

const name='Sizarssss';
function App() {
  return (
    <div className="App">
        <Nav name={name}/>
        <h1>Hello </h1>
      
     
    </div>
  );
}

export default App;
