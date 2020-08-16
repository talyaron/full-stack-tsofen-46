import React, { useState } from 'react';

import './Messages.css';

function Messages(props) {

    const [edit, setEdit] = useState(false);
    const { name,msg } = props
    return (
        <div className={isMe(name) ? 'messages me' : 'messages notme'}>
          {name ?
                <div> rawad:{msg} </div>
                :
                <div> D:{msg}</div>
            }
        </div> //conditional rendering
    )

}



export default Messages;

function isMe(name) {
    return name
}