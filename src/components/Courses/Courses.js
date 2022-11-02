import { useEffect, useState } from "react"
import { useDispatch, useSelector ,shallowEqual} from "react-redux";
import { useNavigate } from "react-router";
import { GetAllCourses, DeleteCourse } from "../../store/Actions/Cours";
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

  const callUs = [
    { Phone: "035435627", Email: "azw@gmail.com" },
    { Phone: "663782", Email: "1212@gmail.com" },
    { Phone: "0524562253", Email: "liem@gmail.com" },
    { Phone: "035333255", Email: "taz@gmail.com" },
  ]
  const details = () => {
    nav("/courseDetails")

  }

  const DELETE = (CourseId) => {

    dispatch(DeleteCourse(CourseId));

  }

  return (
    <>
      <h1>:) הקורסים שלנו</h1>
      {courses_arr.map(Course => <>  <div className="div1"> <b >הקורס:</b> {Course.NameCours}<br></br> יצירת קשר: {callUs[i + 1].Phone} <br></br> {callUs[i + 1].Email} מייל: <br></br>{Course.PeopleAmount} כמות אנשים:<br></br> {Course.Dis} אופי הקורס: <input type="button" value="לפרטים" className="button1" onClick={details}></input>
      </div>{currentUser && currentUser.IdRole == 5 ? (<><div><input type="button" value="מחק" className="ManagerButtons" onClick={() => { alert(Course.Id); DELETE(Course.Id) }}></input><input type="button" className="ManagerButtons" value="עדכן" ></input></div></>) : null}
      </>)}

    </>
  )
}