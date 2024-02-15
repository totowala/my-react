import React, { useState } from "react";
// import ReactDOM from "react-dom"
import memesData from "../memesData";

export default function Header (props)
{
  
    return (
     <header>
        <p>Current user: {props.user}</p>
     </header>
    )
}