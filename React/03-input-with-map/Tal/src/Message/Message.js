import React from 'react';
import './Message.css'

function Message(props) {
    const { message } = props

    return (
        <div className='message'>

            {message.text}
            <div>{message.time.toLocaleString()}</div>
        </div>)
}

export default Message