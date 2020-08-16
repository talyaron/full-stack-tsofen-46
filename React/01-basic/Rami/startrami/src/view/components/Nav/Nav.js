import React from 'react';
import './Nav.css';

export function Nav(){
    return(
        <h1 className='nav'>Navigation Bar</h1>
    )
}

export function Footer(){
    return(
        <h1 className='nav'>Footer</h1>
    )
}


export function Nav2(props){
    const {name,Age} = props;
    return(
        <h1>Welcome {name} Your Age is {Age}</h1>
    )
}