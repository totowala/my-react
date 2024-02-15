import React, { useState } from "react";
// import ReactDOM from "react-dom"
import memesData from "../memesData";

export default function Meme ()
{
    const [memeImg,SetMemeImg] = useState ("") 
       
    function CreateMeme(){
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random()*memesArray.length)
        console.log(randomNum)
    
        SetMemeImg(memesArray[randomNum].url)
        console.log(memeImg)
    }
  
    return (
        <main>
        <div className="mainsection">
            <label for="topText" className="form--label">Enter your favorite movie</label>
            <input type="text" id="topText" placeholder="enter meme" autoFocus className="form--input"></input>
            <label for="bottomText" className="form--label">Enter your name</label>
            <input type="text" id="bottomText" placeholder="enter name" autoFocus className="form--input"></input>
            <button  onClick={CreateMeme} className="form--button">Get Meme</button>
        </div>
        <img src= {memeImg}></img>
        </main>
    )
}