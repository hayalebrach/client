import {useEffect, useState} from "react"
import react from "react";
import "../App.css"
import AddDetailsCours from "./AddDetailsCours";
export default function Courses(){
  let [Course,SetCourse]=useState([
    (new Course("name",90,"dis",90,90,90,"day","type")),
    (new Course("name",90,"dis",90,90,90,"day","type"))
  ])
  
  let addFunc = (Cours) =>{
    alert("addFunc");
    let a = [...Course,Cours]; 
    SetCourse({a});
  }
  return(
    
    <>
{/* <AddDetailsCours addFunc={addFunc}/> */}
    <h1>:) הקורסים שלנו</h1>
    <ul>
        {
        Course.map(Course=><> <br/> <br/><li className="li"> הקורס: {Course.name}<br></br> יצירת קשר: {Course.type} <br></br> {Course.dis} מייל:</li><br></br>  <input type="button" value="הרשם!" className="button"></input>  </> )
        }
    </ul>
    
    </>
  )
}