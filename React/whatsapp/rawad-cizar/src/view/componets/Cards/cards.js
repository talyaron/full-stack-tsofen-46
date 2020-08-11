import React from 'react';
import './card.css';

function Cards(props) {
    const {whatsItem} = props;
    return (
        <div className='card'>

            <img src={whatsItem.img} alt=''/>
            <div id="messagedata" >
            <h2>{whatsItem.name}</h2>
            <p>{whatsItem.massege}</p>
          
            </div>
            <h6>{whatsItem.time}</h6>
        </div>
    )
}

export default Cards;