import { useEffect, useState } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { GetAllCourses, DeleteCourse,Course_Enrollment } from "../../store/Actions/Cours";
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
    alert(currentPool.Id);
    dispatch(GetAllCourses(currentPool.Id));

  }, [])

 
  const details = (Course) => {
    if (currentUser == null) {
      nav("./courseEnrollment");
    }
    else {
      dispatch(Course_Enrollment({ IdUser: currentUser.Id, IdCours: Course.Id }))

    }

  }

  const DELETE = (CourseId) => {
    dispatch(DeleteCourse(CourseId));
  }
  const UPDATE = (CourseId) => {
    nav("./AddDetailsCours");
    // dispatch(updateCourse(CourseId));
  }
  // const callUs = () => {
  //   dispatch(getById(Courses[0].IdUser));
  // }

  return (
    <>
      <h1>:) הקורסים שלנו</h1>
      {courses_arr.map(Course => <>  <div className="div1"> <b >הקורס:</b> {Course.NameCours}<br></br>

        <br></br>{Course.PeopleAmount} כמות אנשים:<br></br> {Course.Dis} אופי הקורס:
        <input type="button" value="לפרטים" className="button1" onClick={details} />

      </div>{currentUser && currentUser.IdRole == 5 ?
        (<>
          <div>
            <input type="button" value="מחק" className="ManagerButtons" onClick={() => { alert(Course.Id); DELETE(Course.Id) }} />
            <input type="button" className="ManagerButtons" value="עדכן" />
          </div>
        </>) : null}
      </>)}

    </>
  )
}