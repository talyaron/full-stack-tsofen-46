import React, { useEffect, useState } from 'react';
import './msginput.css';



function msginputbox() {

    return (
        <div className="InputMessageCard">
            <div className="mm">
                <img className="img1" src=" https://i0.wp.com/www.talyaron.com/wp-content/uploads/2009/01/Tal-Yaron.jpg?ssl=1" alt="" ></img>
            </div>
            <div className="formDiv" onSubmit={handleMsg}>
                <form>
                    <input type="text" placeholder="Send a message " />
                    <input type="submit" value="Sned"></input>
                </form>
            </div>
        </div>
    )
    function handleMsg(e) {
        e.preventDefault();
        console.log("Taaaaaal")
    }

}

export default msginputbox;
