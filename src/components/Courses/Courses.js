import { useEffect, useState } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { GetAllCoursesByPool, DeleteCourse, Course_Enrollment } from "../../store/Actions/Cours";
import "./Courses.css"
export default function Courses() {

  const { courses_arr, currentUser, currentPool } = useSelector(state => ({
    currentUser: state.currentUser,
    courses_arr: state.courses_arr,
    currentPool: state.currentPool
  }), shallowEqual);

  console.log("הבריכה הנוכחית");
  console.log(currentPool);

  const dispatch = useDispatch();
  let nav = useNavigate();
  let i = 0;

  useEffect(() => {
    dispatch(GetAllCoursesByPool(currentPool.Id));
    


  }, [])

const Func=()=>{
  
   for(let i=0;i<courses_arr.length;i++){
    if(courses_arr[i].Id==5)
    courses_arr[i].img="../Pic/fight.png";
    
    if(courses_arr[i].Id==10)
    courses_arr[i].img="../Pic/fight.png"
    if(courses_arr[i].Id==12)
    courses_arr[i].img="../Pic/dumbbell.png"
    if(courses_arr[i].Id==1004)
    courses_arr[i].img="../Pic/yoga (1).png"
    if(courses_arr[i].Id==1005)
    courses_arr[i].img="../Pic/fight.png"

}

}
  const details = (Course) => {
    if (currentUser === "") {
      // nav("./courseEnrollment");
      alert("עליך להיות מחובר כדי להרשם!");
    }
    else {

      dispatch(Course_Enrollment({ IdUser: currentUser.Id, IdCours: Course.Id, Status: true }))
    }

  }
  const checkImg=(idCourse)=>{
    
    if(idCourse==5)
    document.getElementById("img").src="../Pic/swimming.png"
    if(idCourse==10)
    document.getElementById("img").src="../Pic/fight.png"
    if(idCourse==12)
    document.getElementById("img").src="../Pic/dumbbell.png"
    if(idCourse==1004)
    document.getElementById("img").src="../Pic/yoga (1).png"
    if(idCourse==1005)
    document.getElementById("img").src="../Pic/fight.png"
   

  }

  return (
    <>
      <h1>:) הקורסים שלנו</h1>
       {courses_arr.map(Course => <> {Func()}<div className="Mdiv2"><img src={Course.img} className="courseImg"></img><br/><b >קורס  {Course.NameCours}</b><br/> <text>{Course.Dis}</text> <br/><text>{Course.Price}₪</text>
       <input type="button" className="Mbutton" value="להרשמה" onClick={()=>details(Course)}></input>

            {/* <button onClick={() => { if (currentUser != "") details(Course); else (alert("you gotta connect")) }} className="btn"><span>הרשם</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62" className="img2" /> </button> */}

          </div>
          
        </>)}

    </>
  )
}