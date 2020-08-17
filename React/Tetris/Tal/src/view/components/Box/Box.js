import React from 'react';

import './Box.css';

function Box(props) {
    const { img, location, boxes, setBoxes } = props;
    return (
        <img src={img} alt='player' onClick={() => { setBoxes([{ img, location }, ...boxes]) }}></img>
    )


}

export default Box;