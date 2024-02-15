import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Bottom from './components/Bottom';
import React,{useState} from 'react';
import Header from './components/Header';
import memesData from './memesData';
import Data from "./Data";
import Joke from './components/Joke';

function App(props) {

  const [jokes, setJokes] = useState(Data)

  const jokeElement = jokes.map(joke=>(
    <Joke
      setup={joke.setup}
      punchline={joke.punchline}
      />
  ))

  function toggle(id){
    console.log("toggle")
  }
  
  
    return (
  <div>  
  {jokeElement}
    {/* <Header user={box}/> */}
    {/* <Body user={user}/> */}
   
  </div>
  );
}

export default App;
