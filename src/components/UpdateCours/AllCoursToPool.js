import {useEffect, useState} from "react";
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import {getAllCardByIdPool,getById,DeletCard}from "../../store/Actions/Card";
import {GetAllCoursesByPool,getCours}from "../../store/Actions/Cours";


export default function AllCoursToPool()
{
  const {currentPool,courses_arr,currentCours }= useSelector(state => ({
    currentPool: state.currentPool,
    courses_arr:state.courses_arr,
    currentCours:state.currentCours,
  }), shallowEqual);
//console.log(currentPool);
  useEffect(() => {  
    if(currentPool!=null)
      dispatch(GetAllCoursesByPool(currentPool.Id));
}, [courses_arr,currentCours]); 

  const nav=useNavigate();

  const dispatch=useDispatch();

const update=(Id)=>{
  console.log(" ה' רק אתה יכול לעזור לי בזה");
  console.log(Id);
  dispatch(getCours(Id));
  console.log(currentCours);
  nav(("/UpdateCours/"+true));
}
const Delet=(Id)=>{
  console.log(Id);
  console.log("שלום לכם");
  let cours=courses_arr.find(x=>x.Id==Id)
  dispatch(DeletCard(cours)); 
}
  return(
    <>
    <h1>כל הקורסים</h1>
    <ul>
        {
            courses_arr.map(courses_arr=><><br/> <li className="li" key={courses_arr.Id}><h3>שם הקורס: {courses_arr.NameCours}</h3><br/> תאור:{courses_arr.Dis}<br/>  מחיר:{courses_arr.Price}<br/>
            <input type="button" value="עדכון" onClick={()=>update(courses_arr.Id)}/> <input type="button" value="מחיקה" onClick={()=>Delet(courses_arr.Id)}/></li></> )
        }
    </ul>
    <input type="button" value="הוספת קורס" onClick={()=>nav("/AddDetailsCours/true")}/>
    <input type="button" value="חזרה לעמוד הבית" onClick={()=>nav("/ManagerNavBar")}/>
    </>
  )
}