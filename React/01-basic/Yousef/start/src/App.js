import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Nav from './view/components/Nav/Nav'

const name = 'Yousef'

function App() {
  return (
    <div className="App">
      <Nav name={name}/>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
