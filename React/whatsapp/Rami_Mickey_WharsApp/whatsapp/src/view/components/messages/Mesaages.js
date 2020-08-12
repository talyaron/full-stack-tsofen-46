import React from 'react';
import './Mesaages.css'

export function GetMessages(props){

    const {msgItem} = props;
    return (
        <div className='contact'>
           
            <img src={msgItem.img} alt=''/>
            <div className='wrapper'>
            <h2>{msgItem.name}</h2>
            <p>{msgItem.msg}</p>
            </div>
           
        </div>

     
          
       
    )
}