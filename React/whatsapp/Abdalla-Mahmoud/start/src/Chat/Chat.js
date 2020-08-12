import React from 'react';
import './Chat.css';

function Chat(props) {
    const {newsItem} = props;
    return (
        <div className='Chat'>
            
            <div class="tog">
            <img src={newsItem.img} alt=''/>
            <h2 id="txt">{newsItem.text}</h2>
            </div>

            <div class="new">
            <p id="ch"> {newsItem.chat}</p>
            </div>
        </div>
    )
}

export default Chat;