import React from 'react';

import './Box.css';

function Box(props) {
    const { player } = props;
    return (
        <img src={player.url} alt='player' onClick={()=>{handleImg(player.id)}}></img>
        

    

    )

  function handleImg(id){
      console.log(id)
  }  

}

export default Box;