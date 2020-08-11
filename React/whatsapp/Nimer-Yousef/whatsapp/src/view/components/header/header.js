import React from "react";
import "./header.css";
import searchIcon from './icons8-search.svg'
import dots from './more.svg'
import chat from './speech-bubble.svg'

function Header(props) {
    return (
        <div className="headerWrapper">
            <div className="iconContainer">
                <img className="icons" src={searchIcon} alt=""></img>
                <img className="icons" src={chat} alt=""></img>
                <img className="icons" src={dots} alt=""></img>
            </div>
            <h1 className="whatsappWord">WhatsApp</h1>

            <h4 className="navigatorNames" id="chats">Chats</h4>
            <h4 className="navigatorNames" id="calls">Calls</h4>
            <h4 className="navigatorNames" id="status">Status</h4>

        </div>
    )


}






export default Header;
