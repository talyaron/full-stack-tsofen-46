import React from 'react';
import './body.css';



function ChatBar(props){
const {name,content,url,time,number}=props;
console.log(props)
return(

<div className="chatBarWrapper">
    <img src={url} alt='' className="chatImg"></img>
    <h3 className="personalName">{name}</h3>
    <h4 className="chatContent">{content}</h4>
    <h6 className="chatTime">{time}</h6>
    <h6 className="messagesNumber">{number}</h6>
        



</div>

)

}




export default ChatBar;