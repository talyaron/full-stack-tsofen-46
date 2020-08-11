import React from 'react';
import './App.css';

import Nav from './view/components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <h1>Woow!</h1>
      <Nav name="Taima" color="red"/>
      <Nav name="Omri" color="red"/>
    </div>
  );
}

export default App;
