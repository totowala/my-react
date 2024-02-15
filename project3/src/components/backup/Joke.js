import React, { useState } from "react";
// import ReactDOM from "react-dom"

export default function Joke(props)
{
     const [isShow, setIsShow] = useState(false)

     function Toggle()
     {
        setIsShow (prevShow =>!prevShow 
        )
     }
    return (
     
        <div>
        {isShow && <h1> {props.setup}</h1>}
        {props.setup && <h1> {props.punchline}</h1>}
        <button onClick={Toggle}>Toggle</button>

        </div>
    )
    
}