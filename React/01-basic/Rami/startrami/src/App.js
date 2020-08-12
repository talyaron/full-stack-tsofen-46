
import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Nav,Footer, Nav2} from './view/components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Nav2 name='Rami' Age={24}/>
      <Footer/>
    </div>
  );
}

export default App;
