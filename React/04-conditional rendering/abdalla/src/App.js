import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';



const messeges = [
  { isme: true, text: 'helllo' },
  { isme: false, text: 'ahlaaan' },
  { isme: true, text: 'byeee' },
  { isme: false, text: 'slamatttt' }
]

function App() {


  return (
    <div className='messeges'>
      {
      messeges.map((item,index)=>{
        return <box key={index} item={item} />
       })
       }
    </div>
    )



  
      }



export default App;
