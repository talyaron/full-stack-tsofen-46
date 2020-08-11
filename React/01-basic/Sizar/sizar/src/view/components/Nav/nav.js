import React from 'react';
import './nav.css';

function Nav(props){
    const {name}=props 
    return(

        <h1 className='nav'>Sizar's Nav{name} </h1>
    )



}

export default Nav;