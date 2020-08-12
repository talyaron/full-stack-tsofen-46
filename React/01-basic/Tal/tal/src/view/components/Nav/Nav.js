import React from 'react';
import './Nav.css';

export function Nav (props){
    const {name, year} = props

    return(
        <h1 className='nav'>{year}) Navigation Bar for {name} </h1>
    )
}

export function Footer(props){

    const {name} = props

    return (
        <h1 className='nav'>Footer for {name}</h1>
    )
}