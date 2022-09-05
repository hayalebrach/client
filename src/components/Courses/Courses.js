import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {GetAllCourses} from "../../store/Actions/Cours";
import "./Courses.css"
export default function Courses(){
  const Courses=useSelector(state =>state.Courses)
  const dispatch = useDispatch();
  let nav=useNavigate();
 
  const details=()=>{
    dispatch(GetAllCourses());
    nav("/courseDetails")


  }

  return(
    <>
    <h1>:) הקורסים שלנו</h1>
        {Courses.map(Course=><>  <div className="div1"> <b >הקורס:</b> {Course.name}<br></br> יצירת קשר: {Course.phone} <br></br> {Course.email} מייל: <input type="button" value="לפרטים" className="button1" onClick={details}></input></div></> )}
        
    </>
  )
}