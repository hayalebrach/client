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


  const details = (Course) => {
    if (currentUser === "") {
      // nav("./courseEnrollment");
      alert("עליך להיות מחובר כדי להרשם!");
    }
    else {

      dispatch(Course_Enrollment({ IdUser: currentUser.Id, IdCours: Course.Id, Status: true }))


    }

  }

  return (
    <>
      <h1>:) הקורסים שלנו</h1>
       {courses_arr.map(Course => <>  <div className="div1"> <b >הקורס:</b> {Course.NameCours}<br></br>

            <button onClick={() => { if (currentUser != "") details(Course); else (alert("you gotta connect")) }} className="btn"><span>הרשם</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62" className="img2" /> </button>

          </div>
        </>)}

    </>
  )
}