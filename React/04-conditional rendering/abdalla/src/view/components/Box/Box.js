import React, { useState } from 'react';

import './Box.css';

function Box(props) {
    const { item } = props;
    console.log(item)
    return (
        <div className={item.isme?'box me':'box else'}>
            <h1>{item.text}</h1>
            
            
        </div> 
    )

}



export default Box;

