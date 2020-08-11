import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './view/components/nav/Nav';
import Nav2 from './view/components/nav/Nav-2';

function App(props) {
  const {name, lastname} = props;

  return (
  <div>
  <Nav2></Nav2>
    <Nav />

  </div> 

  )
}

export default App;
