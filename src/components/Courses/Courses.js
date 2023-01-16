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
  console.log(CourseToCustomer);
  console.log(courses_arr);
  const dispatch = useDispatch();
  let nav = useNavigate();
  const [flag, SetFlag] = useState();
  useEffect(() => {
<<<<<<< Updated upstream
    dispatch(GetAllCoursesByPool(currentPool.Id));


=======
>>>>>>> Stashed changes
    dispatch(GetCoursesToUser(currentUser.Id));
    if(currentPool!=null)
    dispatch(GetAllCoursesByPool(currentPool.Id));


<<<<<<< Updated upstream

  }, [])
=======
  }, [courses_arr])
>>>>>>> Stashed changes


  const Func = () => {

    for (let i = 0; i < courses_arr.length; i++) {
      if (courses_arr[i].Id == 5)
        courses_arr[i].img = "../Pic/fight.png";

      if (courses_arr[i].Id == 10)
        courses_arr[i].img = "../Pic/fight.png"
      if (courses_arr[i].Id == 12)
        courses_arr[i].img = "../Pic/dumbbell.png"
      if (courses_arr[i].Id == 1004)
        courses_arr[i].img = "../Pic/yoga (1).png"
      if (courses_arr[i].Id == 1005)
        courses_arr[i].img = "../Pic/fight.png"

    }

  }
  const details = (Course) => {
    if (currentUser === "") {
      // nav("./courseEnrollment");
      alert("עליך להיות מחובר כדי להרשם!");
    }
    else {

      dispatch(Course_Enrollment({ IdUser: currentUser.Id, IdCours: Course.Id, Status: true }))

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

<<<<<<< Updated upstream
      const details = (Course) => {
        dispatch(Course_Enrollment({ IdUser: currentUser.Id, IdCours: Course.Id, Status: true }))
        alert("Enrollment succided!")
      }
      const checkImg = (idCourse) => {

        if (idCourse == 5)
          document.getElementById("img").src = "../Pic/swimming.png"
        if (idCourse == 10)
          document.getElementById("img").src = "../Pic/fight.png"
        if (idCourse == 12)
          document.getElementById("img").src = "../Pic/dumbbell.png"
        if (idCourse == 1004)
          document.getElementById("img").src = "../Pic/yoga (1).png"
        if (idCourse == 1005)
          document.getElementById("img").src = "../Pic/fight.png"


      }

      return (
        <>
          <h1>:) הקורסים שלנו</h1>
          {courses_arr.map(Course => <> {Func()}<div className="Mdiv2"><img src={Course.img} className="courseImg"></img><br /><b >קורס  {Course.NameCours}</b><br /> <text>{Course.Dis}</text> <br /><text>{Course.Price}₪</text>
            <input type="button" className="Mbutton" value="להרשמה" onClick={() => details(Course)}></input></div>
=======
//   return (
//     <>
//       <h1>:) הקורסים שלנו</h1>
//       {console.log(courses_arr)}
//        { courses_arr.map(Course=><><br/> <div className="div1" key={Course.Id}><h3>שם הקורס: {Course.NameCours}</h3><br/> תאור:{Course.Dis}<br/>  מחיר:{Course.Price}<br/>

//             <button onClick={() => { if (currentUser != "") details(Course); else (alert("you gotta connect")) }} className="btn"><span>הרשם</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62" className="img2" /> </button>


     
//      {flag==true?<input type="button" value="להרשם שוב" className="button1" onClick={()=>details(Course)}/>:<input type="button" value="להרשמה" className="button1" onClick={()=>Chek(Course)} />
// }
    
//       </div></>)} 

//  </>
//  )

return (
  <>
    <h1>:) הקורסים שלנו</h1>
    {
    courses_arr.map(Course => <>  <div className="div1"> <b >הקורס:</b> {Course.NameCours}<br></br>
      <br></br>{Course.PeopleAmount} כמות אנשים:<br></br> {Course.Dis} אופי הקורס:<br />

      {
      currentUser && currentUser.IdRole == 2 ?
        (
        <>
          <div>
            <input type="button" value="מחק" className="ManagerButtons"/>
            <input type="button" className="ManagerButtons" value="עדכן" />
          </div>
        </>
        ) : <div className="cont">
          <button onClick={() => { if (currentUser != "") details(Course); else (alert("you gotta connect")) }} className="btn"><span>הרשם</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62" className="img2" /> </button>


    </div>
}
    {
      currentUser && currentUser.IdRole == 2 ?
      (<>
        <div>
          <input type="button" value="מחק" className="ManagerButtons"/>
          <input type="button" className="ManagerButtons" value="עדכן" />
        </div>
      </>) :<input type="button" value="להרשמה" className="button1" onClick={()=>details(Course)} />
}
      

    </div>

    </>
    )
    }

  </>
)




 }
>>>>>>> Stashed changes

            {flag == true ? <input type="button" value="להרשם שוב" className="button1" onClick={() => details(Course)} /> : <input type="button" value="להרשמה" className="button1" onClick={() => Chek(Course)} />}

          </>)}</>)

      }
    }
  }

