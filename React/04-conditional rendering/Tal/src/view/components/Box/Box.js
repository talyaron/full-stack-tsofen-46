import React, { useState } from 'react';

import './Box.css';

function Box(props) {
    const [name, setName] = useState('name');
    const [edit, setEdit] = useState(false);
    const { number, setCounter, counter } = props
    return (
        <div onMouseOver={()=>{setCounter(counter +1)}} className={isEven(number) ? 'box even' : 'box odd'}>
            <div onClick={()=>{setEdit(!edit)}}>{number}</div>
            {edit ?
                <input type='text' placeholder={name} onBlur={e=>{
                    setName(e.target.value );
                    setEdit(!edit);
                }}/>
                :
                <div onClick={()=>{setEdit(!edit)}}>a: {name}</div>
            }
        </div> //conditional rendering
    )

}



export default Box;

function isEven(x) {
    return x % 2 === 0
}