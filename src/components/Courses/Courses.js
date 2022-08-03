import {useEffect, useState} from "react"
import { useNavigate } from "react-router";
import "./Courses.css"
export default function Courses(){
  let nav=useNavigate();
  const [Courses,SetCourses]=useState([]);

  useEffect(()=>{
      const fakeCourses=
      [
          {name:"שחיה",email:"lieli@gmail.com",phone:"5333255"},
          {name:"ספורט",email:"chayush@gmail.com",phone:"05222552"},
          {name:"ריצה",email:"sivani@gmail.com",phone:"0202225"},
          {name:"לחימה",email:"sapirush@gmail.com",phone:"0325522"}
      ];

      SetCourses(fakeCourses);

  },[])

  const details=()=>{
    nav("/courseDetails")


  }

 

  return(
    <>
    <h1>:) הקורסים שלנו</h1>
        {Courses.map(Course=><>  <div className="div1"> <b >הקורס:</b> {Course.name}<br></br> יצירת קשר: {Course.phone} <br></br> {Course.email} מייל: <input type="button" value="לפרטים" className="button1" onClick={details}></input></div></> )}
        
    </>
  )
}