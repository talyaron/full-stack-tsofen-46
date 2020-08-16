import React from 'react';

import './Box.css';

function Box(props) {
    const { item } = props
    return (
        <div className={item.isMe ? 'box me' : 'box else'}>
            <h3>{item.author}</h3>
            <h6>{item.text}</h6>
        </div> //conditional rendering
    )

}



export default Box;