import React from 'react';
import './ChatMsg.css';

function ChatMsg(props) {
    const {oChatItem} = props;
    return (
        <div class="username">{oChatItem.username}</div>
    )
    
}
export default ChatMsg;