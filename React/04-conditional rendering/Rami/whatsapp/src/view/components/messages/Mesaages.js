import React from 'react';
import './Mesaages.css'

export function GetMessages(props){

    const {msgItem} = props;
    const author = msgItem.author
    return (
        <div>
        {author ? 
            <div className={author ? 'contact sent' : 'contact recieved'}>
            <div className='wrapper'>
            <p>{msgItem.msg}</p>
            </div>
           
        </div>
        :
        <div className={author ? 'contact sent' : 'contact recieved'}>
            <img src={msgItem.img} alt=''/>
            <div className='wrapper'>
            <h2>{msgItem.name}</h2>
            <p>{msgItem.msg}</p>
            </div>
           
        </div>
    
    }
        

</div>
          
       
    )
}
