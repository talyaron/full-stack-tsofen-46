import React from 'react';
import './Comments.css'

function Comments(props) {
    const { item } = props;
    return (
        <div>
            
            <p className='comment'>{item}</p>

        </div>
    );
}
export default Comments;

