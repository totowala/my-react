import React, { useState } from "react";
// import ReactDOM from "react-dom"
import memesData from "../memesData";

export default function Body(props)
{
     const mode = props.darkmode? "mainDark":"mainLight"
    return (
     <main  className={mode}>
            { <button onClick={props.toggleFunc}>Click</button> }
        <h1>Which one is your favorite?</h1>
        <ul>
            <li>Star War</li>
            <li>Game of Throne</li>
            <li>Black Mirror</li>
            <li>Lord of Ring</li>

        </ul>
        
    </main>
    )
}