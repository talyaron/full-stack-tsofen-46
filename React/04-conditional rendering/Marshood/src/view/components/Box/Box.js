import React, { useState } from 'react';

import './Box.css';

function Box(props) {
    const { number } = props;
    return (
     
     
        <div className={number.isMe ? 'box isMeTrue' : 'box isMeFalse'}>
            <h2>{number.author}</h2>
            <p>{number.text}</p>
        </div> //conditional rendering
    )

}



export default Box;