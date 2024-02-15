import React, { useEffect, useState } from "react";
export default function WindowTracker()
{
//     const [formData, setFormData] = useState(
//         {firstname:"",
//         lastname:"",
//         email:"",
//         comments:"",
//         employment:"",
//         favColor:""
//     })
    
//     function handleFormData(event){
//         const {name, value, type, checked} = event.target
//             setFormData(prevFormData =>({
//              ...prevFormData,[name]:type==="checkbox"? "checked":value
//         })
//         )
      
    
//         // const element = document.getElementById ()
//     }
//     function handelSubmit(event)
//     {
//         event.preventDefault()
//         // submitToApi()
//     }
// return (
//     <div>
//     <form onSubmit={handelSubmit}>
//     <input type="text" placeholder="First Name" onChange={handleFormData} name="firstname"/>
//     <input type="text" placeholder="Last Name" onChange={handleFormData} name="lastname"/>
//     <input type="text" placeholder="Email" onChange={handleFormData} name="email"/>
//     <fieldset>
//     <input type="radio" id="full-time" value="full-time" onChange={handleFormData} checked = {formData.employment === "full-time"} name="employment"/> 
//     <label htmlFor="full-time">Full-time</label>
//     </fieldset>
//     <br/>
//     <textarea placeholder="comments" onChange={handleFormData} name="comments"/>
//     <label htmlfor="favColor">what is your fav color?</label>
//     <select >
//         id="favColor"
//         value = {formData.favColor}
//         onChange={handleFormData}
//         name="favColor"
//         <option value="red">Red</option>
//         <option selected value="blue">Blue</option>
//         <option value="green">Green</option>
//         <option value="orange">Orange</option>
//         <option value="pink">Pink</option>
//         <option value="black">Black</option>
//     </select>
//     <br/>
//     <br/>
//     <input type="submit" value="Send it"/>
//     <button>Submit</button>

//     </form>
//     <h1>Hello {formData.firstname} {formData.lastname}</h1>
//     </div>
// )

const [size, setSize]= useState(window.innerWidth)
function ChangeSize(){
    setSize(window.innerWidth)
}
useEffect(() => {
    function watchWidth()
    {
        setSize(window.innerWidth);
    }
window.addEventListener("resize",watchWidth);
return function() {
    console.log("cleaning up")
    window.removeEventListener("resize",watchWidth)
}},[]
)
const cssName = "container2"
return (
    <div className={cssName}>
    <h1>window width {size}</h1>
    </div>
)
}