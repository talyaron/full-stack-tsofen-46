import React from 'react';

import './Box.css';

function Box(props) {
    const { player, setMyArray, myArray } = props;
    return (
        <img src={player.url} alt='player' onClick={() => { handleImg(player) }}></img>


    )
    function handleImg(player) {
        // let answer = ''
        // if(player.id ===1){
        //     answer +=
        //     `<div className=ronaldo>
        //      <img src={player.url}/>
        //     </div>`
        // }
        // if(player.id ===2){
        //     answer +=
        //     `<div className=messi>
        //      <img src={player.url}/>
        //     </div>`
        // }
        setMyArray([...myArray,player])
    }
    
}

export default Box;