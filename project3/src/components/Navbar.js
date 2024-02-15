import React from "react";
import ReactDOM from "react-dom"
import iconimage from '../image/myicon.png'

export default function Navbar ()
{
    return (
        <header>
            <img src={iconimage}></img>
            <h3>Meme Creator</h3>
            <h4>Project 1</h4>
        </header>
    )
}