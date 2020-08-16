import React from 'react';

import './Box.css';

function Box(props) {
    const { player,setMyArray, myArray } = props;
    return (
        <img src={player.url} alt='player' onClick={()=>{handleImg(player.id)}}></img>
        

    )

  function handleImg(id){
      setMyArray([...myArray,player])
  }  

}

export default Box;