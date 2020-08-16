import React from 'react';

import './Box.css';

function Box(props) {
    const { player, setMyArray, myArray } = props;
    return (
        <img src={player.url} alt='player' onClick={() => { handleImg(player) }}></img>


    )
    function handleImg(player) {
        setMyArray([player,...myArray])
    }
    
}

export default Box;