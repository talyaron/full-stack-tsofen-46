import React from 'react';
import './Nav.css';


function Nav(props) {
    const {name} = props;
    return (
        <h1 className='nav'>Navigation Bar for {name}</h1>
    )
}

export default Nav;