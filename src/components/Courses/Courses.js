import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {GetAllCourses} from "../../store/Actions/Cours";
import "./Courses.css"
export default function Courses(){
  const Courses=useSelector(state =>state.courses_arr);
  const currentPool=useSelector(state =>state.currentPool)
  const dispatch = useDispatch();
  let nav=useNavigate();
 let i=0;

 useEffect(()=>{
  dispatch((GetAllCourses(currentPool.Id)));
  alert(currentPool.Name);
 },[])

  const callUs=[
    {Phone:"035435627",Email:"azw@gmail.com"},
    {Phone:"663782",Email:"1212@gmail.com"},
    {Phone:"0524562253",Email:"liem@gmail.com"},
    {Phone:"035333255",Email:"taz@gmail.com"},
  ]
  const details=()=>{
    
    
    nav("/courseDetails")


  }

  return(
    <>
    <h1>:) הקורסים שלנו</h1>
        {Courses.map(Course=><>  <div className="div1"> <b >הקורס:</b> {Course.NameCours}<br></br> יצירת קשר: {callUs[i+1].Phone} <br></br> {callUs[i+1].Email} מייל: <br></br>{Course.PeopleAmount} כמות אנשים:<br></br> {Course.Dis} אופי הקורס: <input type="button" value="לפרטים" className="button1" onClick={details}></input></div></> )}
        
    </>
  )
}