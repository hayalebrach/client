import { useEffect, useState } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { GetAllCoursesByPool, Course_Enrollment, DeleteCourse, GetCoursesToUser } from "../../store/Actions/Cours";
import "./Courses.css"
export default function Courses() {

  const { courses_arr, currentUser, currentPool, CourseToCustomer } = useSelector(state => ({
    currentUser: state.currentUser,
    courses_arr: state.courses_arr,
    currentPool: state.currentPool,
    CourseToCustomer: state.CourseToCustomer
  }), shallowEqual);
  const dispatch = useDispatch();
  let nav = useNavigate();
  const [flag, SetFlag] = useState();
  useEffect(() => {

    dispatch(GetAllCoursesByPool(currentPool.Id));

  }, [])

  const details = (Course) => {
    if (currentUser === "") {
      alert("עליך להיות מחובר כדי להרשם!");
    }
    else {
      dispatch(Course_Enrollment({ IdUser: currentUser.Id, IdCours: Course.Id, Status: true }))
    }
  }

  let c;
  const Chek = (Course) => {
    console.log(CourseToCustomer);
    c = CourseToCustomer.find(x => x.IdUser == currentUser.Id && x.IdCours == Course.Id);
    console.log(c);
    if (c != undefined) {
      alert("קורס זה קים כבר ברשותך");
      SetFlag(true);

    }
    else
      if (currentUser === "")
        alert("עליך להיות מחובר כדי להרשם!")
  }


  return (
    <>
      <h1>:) הקורסים שלנו</h1>
      {courses_arr.map(Course => <><div className="Mdiv2"><img src={`../Pic/${Course.Pic}`} className="courseImg"/><br /><b >קורס  {Course.NameCours}</b><br /> <text>{Course.Dis}</text> <br /><text>{Course.Price}₪</text>


        {flag == true ? <input type="button" value="להרשם שוב" className="button1" onClick={() => details(Course)} /> : <input type="button" className="Mbutton" value="להרשמה" onClick={() => Chek(Course)}></input>}</div>

      </>)}</>)

}



