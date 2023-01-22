import { useEffect, useState } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GetAllCoursesByPool, Course_Enrollment, Delete, getCours, GetCoursesToUser } from "../../store/Actions/Cours";
import { GetTimeOfCoursByIdPool } from "../../store/Actions/Time";
import "./Courses.css"
export default function Courses() {

  const { courses_arr, currentUser, currentPool, CourseToCustomer, currentCours,TimeToCourses } = useSelector(state => ({
    currentUser: state.currentUser,
    courses_arr: state.courses_arr,
    currentPool: state.currentPool,
    CourseToCustomer: state.CourseToCustomer,
    currentCours: state.currentCours,
    TimeToCourses:state.TimeToCourses
  }), shallowEqual);

  const dispatch = useDispatch();
  let nav = useNavigate();
  const [flag, SetFlag] = useState();

  useEffect(() => {

    if (currentUser.Id != undefined)
      dispatch(GetCoursesToUser(currentUser.Id));
    if (currentPool != null){
      dispatch(GetAllCoursesByPool(currentPool.Id));
      dispatch(GetTimeOfCoursByIdPool(currentPool.Id));
    }

      
  }, [])
  //console.log(courses_arr);

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
  const update = (Id) => {
    console.log(" ה' רק אתה יכול לעזור לי בזה");
    console.log(Id);
    dispatch(getCours(Id));
    console.log(currentCours);
    nav(("/UpdateCours/" + true));
  }
  const Delet = (Id) => {
    console.log(Id);
    console.log("שלום לכם");
    let cours = courses_arr.find(x => x.Id == Id);
    alert("קורס זה נמחק מרשימת הקורסים לבריכה זו");
    Delete(cours).then();
  }
  

//   function Func(Course){  
//    let TimeArr=[];
//     for(let i=0;i<TimeToCourses.length;i++){
//         if(TimeToCourses[i].IdCours==Course.Id)
//           TimeArr.push(TimeToCourses[i]);
 
//     }  

//     return TimeArr;
    
    
// }

  return (
    <>
      {currentUser.IdRole ==2?
        <>
          <h1>:) קורסי הבריכה </h1>
          <input type="button" className="buttonn" value="הוספת קורס" onClick={() => nav("/AddDetailsCours/true")} style={{position:"relative" ,top:"20px"}} />
        </> : <>
          <h1>:) הקורסים שלנו</h1></>}
          
          <br/><br/>
          {courses_arr.map(Course => <><div className="Mdiv2"><img src={`${Course.img}`}alt="" className="courseImg"></img> <br /><b >קורס  {Course.NameCours}</b><br /> <text>{Course.Dis}</text> <br /><text>{Course.Price}₪</text>
            <br/>
            <Link to="CourseSchedule" className="navbar-brand">לזמני הקורס</Link>    

            
          {currentUser.IdRole == 2 ?
            <>
            <div className="DelUpdButtons">
              <input type="button" value="עדכן" className="button" onClick={() => update(Course.Id)} />
              <input type="button" value="מחק" className="button" onClick={() => Delet(Course.Id)} />
              </div>
            </>
            : <>
              {flag == true ? <input type="button" value="להרשם שוב" className="Mbutton1" onClick={() => details(Course)} /> :<><br/> <input type="button" className="buttonn" value="להרשמה"  onClick={() => Chek(Course)} /></>}

            </>}</div></>)}

      
      </>)
  

}




