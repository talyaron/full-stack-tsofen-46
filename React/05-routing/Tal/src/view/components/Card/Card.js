import React from 'react';
import './Card.css';

function Card(props) {
    const {newsItem} = props;
    
    
    
    return (
        <div className='card'>
            <img src={newsItem.img} alt=''/>
            <p>{newsItem.text}</p>
        </div>
    )
}

export default Card;