import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {useEffect} from 'react';
import Confetti from 'react-confetti';
import { onSnapshot,addDoc,doc, deleteDoc,setDoc } from 'firebase/firestore';
import {notesCollection} from "./firebase"
import {db} from "./firebase"
import Die from './components/Die';
import {nanoid} from "nanoid"
function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false) 

  useEffect (() => {
    const allHeld = dice.every(die=>die.isHeld)
    const firstValue = dice[0].value
    const sameValue = dice.every (die=> die.value === firstValue)
    if (allHeld && sameValue){
      setTenzies(true)
      console.log("You won!")
    }

  },[dice]
  )

const getCurrentTime = ()  =>
{
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}

function genetateNewDie()
{
  return {
    id:nanoid(),
    value:Math.ceil (Math.random()*6),
    isHeld:false
  }
}
function allNewDice()
{
  const newDice = []
  for(let i=0; i<10;i++){
      newDice.push(genetateNewDie())
    }
  // console.log(newDice)
  return newDice
}
function rollDice(){
  if(!tenzies) {
  setDice(newDice => newDice.map (die => {
    return die.isHeld? die: genetateNewDie()
  }))}
  else{
    setTenzies(false)
    setDice(allNewDice())
  }
  // setDice(allNewDice())
}
function updateDice(){
  setDice(newDice => newDice.map (die => ({
    ...die, value: die.isHeld===true? Math.ceil (Math.random()*6):die
  })))
}
function holdDice(id){
  setDice(newDice => newDice.map (die => {
    return die.id===id? {...die,isHeld:!die.isHeld}:die
  }))
}
const diceElements = dice.map(die=> <Die value={die.value} key={die.id} isHeld ={die.isHeld} holdDice={()=>holdDice(die.id)}/>)

console.log(diceElements)

  return (
  <main>   
    {tenzies && <Confetti/>}
    <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> 
    <div className='dice-container'>
    {diceElements}
    </div>   
    <button className="roll-dice" onClick={rollDice}>
      {tenzies? "New Game":"Roll"}</button>
  </main>
  )
}

export default App;
