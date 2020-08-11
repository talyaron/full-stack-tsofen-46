import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ToolBar,Nav} from './view/components/toolBar/toolBar'


function App() {
  return (
    <div className="App">
      <ToolBar/>
      <Nav name={'abona'}></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
         Happy Hacking
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
