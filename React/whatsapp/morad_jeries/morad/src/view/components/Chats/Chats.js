import React from 'react';
import './Chats.css';

export function Chat(props) {
    const {chatsItem} = props;
    return (
        <div className='chatItem'>
            <img className="chatImage" src={chatsItem.img} alt=''/>
            <div>
                <p className="textSender">{chatsItem.name}</p>
                <p className="textInfo">{chatsItem.text}</p>
            </div>
        </div>
    )
}
