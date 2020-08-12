import React from 'react';
import './MessageCard.css';

function MessageCard(props) {
    const { msgInfo } = props;


    console.log("dsefse", msgInfo)
    return (
        <div className='MessageCard'>
            <div className='imgdiv'>
                <img className='imgM' src={msgInfo.img} alt='' />
                <div className='divmsginfo'>

                    <p className='msgname'>{msgInfo.name}</p>
                    <div className='RT'>
                        {checkMsg(msgInfo.received,msgInfo.text)}
                        {/* <p className='msgtext'><img src="https://img.icons8.com/small/16/000000/double-tick.png" />    {"     "}{msgInfo.text}</p> */}
                    </div>
                </div>
            </div>

            <div className='divtime'>
                <p className='msgtime'>{msgInfo.timeReceived}</p>
            </div>

        </div>

    )
}

function checkMsg(msg,msgtext) {
     if (msg )
     {
        return <p className='msgtext'><img src="https://img.icons8.com/color/24/000000/double-tick.png"/>    {"     "}{msgtext}</p>

    }
    else
    {
        return <p className='msgtext'><img src="https://img.icons8.com/small/24/000000/double-tick.png" />
        {"     "}{msgtext}</p>

    }

   
}
export default MessageCard;