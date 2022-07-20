import {useEffect, useState} from "react"
import "./App.css"
export default function Courses(){
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

  return(
    <>
    <h1>:) הקורסים שלנו</h1>
    <ul>
        {
        Courses.map(Course=><> <br/> <br/><li className="li"> הקורס: {Course.name}<br></br> יצירת קשר: {Course.phone} <br></br> {Course.email} מייל:</li></> )
        }
    </ul>
    
    </>
  )
}