import React, { useState } from "react";
// import ReactDOM from "react-dom"

export default function Box(props)
{
    const bgStyle= {
        backgroundColor:props.on? "blue":"green"
      }
      console.log(props.id)
    
    return (
        <div className='box' style={bgStyle} onClick={(event)=>props.toggle}>key={props.id}
        </div>
    )
}