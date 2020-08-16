import React from 'react';
import './Comments.css'


function Comments(props){
    const {newItem} = props;
    return(
        <p className="comment">{newItem}</p>
        
        
    )   
}


export default Comments;