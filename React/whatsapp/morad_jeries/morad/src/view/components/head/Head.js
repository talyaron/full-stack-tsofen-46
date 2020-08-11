import React from 'react';
import './Head.css';

export function Head() {
    return (
        <div id="mainDiv">\
            
            <div id="header">
                <img id="Dots" src="https://image.flaticon.com/icons/svg/2089/2089706.svg" alt='' />
                <img id="search" src="https://image.flaticon.com/icons/svg/54/54481.svg" alt='' />
                <p id="whatsUp">WhatsApp</p>
            </div>
            <div id="tabsDiv">
                <p className="tabs">צ'אטים</p>
                <p className="tabs">סטטוס</p>
                <p className="tabsActive">שיחות</p>
            </div>
        </div>
    )
}
