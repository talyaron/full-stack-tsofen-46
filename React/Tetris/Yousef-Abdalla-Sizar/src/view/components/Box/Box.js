import React from 'react';

import './Box.css';

function Box(props) {
    const { player } = props
    return (
        <img src={player.url} alt='player'></img>
        

    

    )

    }

export default Box;