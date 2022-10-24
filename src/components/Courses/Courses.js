import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {GetAllCourses,DeleteCourse,Course_Enrollment,updateCourse} from "../../store/Actions/Cours";
import {getById} from "../../store/Actions/Users"

import "./Courses.css";
export default function Courses(){
  const Courses=useSelector(state =>state.courses_arr);
  const currentPool=useSelector(state =>state.currentPool);
  const currentUser=useSelector(state =>state.currentUser);

  const dispatch = useDispatch();
  let nav=useNavigate();
  let i=0;
  let Details=null;
 useEffect(()=>{
  dispatch((GetAllCourses(currentPool.Id)));

  
 },[]);

  
   const details=(Course)=>{
    if(currentUser==null){
     nav("./courseEnrollment");
    }
    else{
      dispatch(Course_Enrollment({IdUser:currentUser.Id,IdCours:Course.Id}))

    }

  }

  const CallUs=(IdUser)=>{
    dispatch(getById(IdUser));
    var User=useSelector(state =>state.User);
    Details={Phone:User.Phone,Email:User.Email};
    
  }

  const DELETE=(CourseId)=>{
      dispatch(DeleteCourse(CourseId));
  }

  const UPDATE=(CourseId)=>{
    nav("./AddDetailsCours");
    // dispatch(updateCourse(CourseId));
}
  

  return(
    <>
    <h1>:) הקורסים שלנו</h1>
        {Courses.map(Course=><>{()=>CallUs(Course.IdUser)} <div className="div1"> <b >הקורס:</b> {Course.NameCours}<br></br> יצירת קשר:  <br></br> {()=>Details.Email} מייל: <br></br> פלאפון:{()=>alert(Details.Phone)}<br></br> {Course.PeopleAmount} כמות אנשים:<br></br> {Course.Dis} אופי הקורס: 
        </div>{currentUser && currentUser.IdRole==2?(<><div><input type="button" value="מחק"  className="ManagerButtons" onClick={()=>{DELETE(Course.Id)}}></input><input type="button" onClick={()=>UPDATE(Course.Id)} className="ManagerButtons" value="עדכן" ></input></div></>):(<input type="button" value="להרשמה" className="button1" onClick={details(Course)}></input>)}</> )}
        
    </>
  )
}