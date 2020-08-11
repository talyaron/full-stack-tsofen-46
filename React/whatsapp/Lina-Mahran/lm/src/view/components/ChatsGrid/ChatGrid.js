import React from 'react';
import './ChatGrid.css';

function ChatGrid(props) {
    const { chatItem } = props;
    return (
        <div className='chat'>
            <img src={chatItem.img} alt='' />
            <div className="msgArea">
                <p id='name'>{chatItem.name}</p>
                <p>{chatItem.msg}</p>
            </div>

            <div className='data'>
                <p>{chatItem.time}</p>
                <p id='count'>{chatItem.count}</p>
            </div>
        </div>
    )
}
export default ChatGrid;