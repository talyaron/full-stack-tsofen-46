import React from 'react';
import'./Nav.css'

export function Nav(props)
{
    const {name, year} = props;

    return(
        <h1 className='nav'>your name: {name}, and your age is:{2020-year}</h1>
    )
}