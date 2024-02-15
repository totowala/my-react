import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {useEffect} from 'react';
import memesData from './memesData';
import Data from './Data';
import WindowTracker from './components/WindowTracker';
import Navbar from './components/Navbar';
import Body from './components/Body';
import {nanoid} from "nanoid"
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Split from "react-split"
import { onSnapshot,addDoc,doc, deleteDoc,setDoc } from 'firebase/firestore';
import {notesCollection} from "./firebase"
import {db} from "./firebase"
function App() {

  // const [swdata,setSWData] = useState (null)
  
  // const dataArray = memesData
  // const randomNum = Math.floor(Math.random()*dataArray.length)
  
  // console.log(memesData[randomNum])

  // function ChangeData(){
  //   setSWData(dataArray[randomNum])
  // }
  // fetch('https://swapi.dev/api/people/1')
  //   .then(res=> res.json())
  //   .then(data1=> setSWData(data1))

  // useEffect(()=> {
  //   const fetchData = async() =>{
  //     try{const fetchResp = await fetch ('https://swapi.dev/api/people/1')
  //         const jsonData = await fetchResp.json()
  //   // console.log(jsonData)
  //         setData(jsonData)
  //     }  catch(error){ console.error('Error fetching data:',error)      }
  //   }
  //   fetchData();
  // },[] )
  // 
  
  // const [darkMode, setDarkMode] = useState(true)
  // function toggleDarkMode()
  // {
  //   setDarkMode (prevMode => !prevMode)
  // }

  // const [notes, setNotes] = useState(()=> JSON.parse(localStorage.getItem("notes"))||[])
  const [notes, setNotes] = useState([])
  const [currentNoteId,setCurrentNoteId] = useState("")
  const [tempNoteText,setTempNoteText] = useState("")
  const currentNote = notes.find (note => note.id === currentNoteId) || (notes[0]?notes[0]:"")
  // console.log (currentNoteId)
  useEffect(()=>
    {
      // localStorage.setItem("notes",JSON.stringify(notes))
      // console.log(notes[0].body.split("\n"))
      const unsubscribe = onSnapshot(notesCollection,function(snapshot){
        // sync up local notes with snapshot data
        const notesArr = snapshot.docs.map(doc => ({
          ...doc.data(),
          id:doc.id
        }))
        setNotes(notesArr)
      })
      // console.log("THINGS ARE CHANGING")
      return unsubscribe

  },[notes]
  )
  React.useEffect(() => {
    if (!currentNoteId){setCurrentNoteId(notes[0]? notes[0].id:"")}
},[notes])

React.useEffect(() => {
  if (currentNote) {
      setTempNoteText(currentNote.body)
  }
}, [currentNote])

React.useEffect(() => {
  const timeoutId = setTimeout(() =>{
    if (tempNoteText != currentNote.body)
      updateNote(tempNoteText)
  },500)
  return () => clearTimeout(timeoutId)
}, [tempNoteText])

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
  async function createNewNote()
  {
    const currentDate = getCurrentTime()
    const newNote = {
      body:"# enter your note's title here",
      createdAt:currentDate,
      updatedAt:"",
      updated:0
    }
    console.log(currentDate)
    const newNoteRef = await addDoc(notesCollection,newNote)
    // setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNoteRef.id)
  }
async function updateNote(text)
{
  // setNotes (oldNotes => {
  //   const newArray = []
  //   for (let i =0; i<oldNotes.length; i++)
  //   {
  //     const oldNote = oldNotes[i]
  //     if (oldNote.id === currentNoteId)
  //     newArray.unshift({...oldNote,body:text})
    
  //   else {newArray.push(oldNote)}
  //   }
  //   return newArray
// })
const currentDate = getCurrentTime()
const date = Date.now()
console.log(currentDate)

const docRef = doc(db,"notes",currentNoteId)
await setDoc(docRef,{body:text,updatedAt:currentDate,updated:date},{merge:true})
}
async function deleteNote(noteId){
// function deleteNote(event, noteId){ // event.stopPropagation()
  // setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  // console.log("deleted note",noteId)
  const docRef = doc(db,"notes",noteId)
  await deleteDoc(docRef)
}

const SortedNotes = notes.slice().sort((a, b) => b.updated - a.updated);
 

  return (
  <main>  
   {
  notes.length > 0 ?
  <Split
  sizes={[30,70]}
  direction="horizontal"
  className="split"
  >
    <Sidebar
    notes={SortedNotes}
    currentNote={currentNote}
    setCurrentNoteId={setCurrentNoteId}
    newNote={createNewNote}
    deleteNote={deleteNote}
    />
    {
      <Editor
      // currentNote={currentNote}
      // updateNote={updateNote}
      tempNoteText={tempNoteText}
      setTempNoteText={setTempNoteText}
      />
    }
  </Split>
  :
  <div className='no-notes'>
  <h1>You have no notes</h1>
  <button
  className='first-note'
  onClick={createNewNote}
  >Create one now</button>
  </div>
   }
  </main>
  )
}

export default App;
