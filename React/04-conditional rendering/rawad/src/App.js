import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Messages from './view/components/Messages/Messages';


function App() {

  return (
    <div id="cont">
      <Messages name={true} msg={"hi"} />
      <Messages name={false} msg={"hi"} />
      <Messages name={false} msg={1} />
      <Messages name={true} msg={"as"}/>
      <Messages name={false}  msg={3}/>
      <Messages name={true} msg={"sa"}/>

    </div>



  );
}



export default App;
