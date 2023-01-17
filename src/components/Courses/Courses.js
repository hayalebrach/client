import { useEffect, useState } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { GetAllCoursesByPool, Course_Enrollment, Delete,getCours, GetCoursesToUser } from "../../store/Actions/Cours";
import "./Courses.css"
export default function Courses() {

  const { courses_arr, currentUser, currentPool, CourseToCustomer,currentCours } = useSelector(state => ({
    currentUser: state.currentUser,
    courses_arr: state.courses_arr,
    currentPool: state.currentPool,
    CourseToCustomer: state.CourseToCustomer,
    currentCours:state.currentCours
  }), shallowEqual);

  const dispatch = useDispatch();
  let nav = useNavigate();
  const [flag, SetFlag] = useState();

  useEffect(() => {
    if(currentUser.Id!=undefined)
      dispatch(GetCoursesToUser(currentUser.Id));
    if(currentPool!=null)
      dispatch(GetAllCoursesByPool(currentPool.Id));
  }, [courses_arr])
  //console.log(courses_arr);

  const details = (Course) => {
    if (currentUser === "") {
      // nav("./courseEnrollment");
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
            nav("./courseEnrollment")
      }

//עדכון ומחיקה למנהל בריכה
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
  let cours=courses_arr.find(x=>x.Id==Id);
  alert("קורס זה נמחק מרשימת הקורסים לבריכה זו");
  Delete(cours).then(); 
}


return (
  <>
    <h1>:) הקורסים שלנו</h1>
    {currentUser.IdRole==2?<input type="button" value="הוספת קורס" onClick={()=>nav("/AddDetailsCours/true")}/>:null}
    {courses_arr.map(Course => <><div className="Mdiv2"><img src={`${Course.img}`} className="courseImg"></img><br /><b >קורס  {Course.NameCours}</b><br /> <text>{Course.Dis}</text> <br /><text>{Course.Price}₪</text>

{currentUser.IdRole==2?
<>
<input type="button" value="עדכן" className="Mbutton1" onClick={()=>update(Course.Id)}/>
<input type="button" value="מחק" className="Mbutton1" onClick={()=>Delet(Course.Id)}/>
</>
:<>
{flag == true ? <input type="button" value="להרשם שוב" className="Mbutton1" onClick={() => details(Course)} /> : <input type="button" value="להרשמה" className="Mbutton1" onClick={() => Chek(Course)} />}

</>}
    </div></>)}</>)

}


