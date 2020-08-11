import React from 'react'
import './Nav.css'

export function Nav(props){
    const {name} = props;
    return (
    <h1 className="titlePanel">helllllllllloooo {name}</h1>
    )
}

export function Footer(props){
    const {name,year} = props;
    return(
    <p className="titlePanel">{year} !!!!!!!!!!!!!!!!!!!!!!{name}</p>
    )
}