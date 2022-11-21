import { ClassNames } from "@emotion/react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { GetCoursesToUser } from "../../store/Actions/Cours";
import { savePoolById } from "../../store/Actions/Pools";


export const CourseToUser=()=>{
const dispatch=useDispatch();
const nav=useNavigate();
const { CourseToCustomer, Courses,currentUser,currentPool } = useSelector(state => ({
    CourseToCustomer: state.CourseToCustomer,
    Courses: state.AllCourses,
    currentUser:state.currentUser,
    currentPool:state.currentPool
    
  }), shallowEqual);


useEffect(() => {
    dispatch(GetCoursesToUser(currentUser.Id));
    }, [])

    function Func(Course){
        
        const index = Courses.findIndex(x => x.Id == Course.IdCours)
        return Courses[index];
    }

    const ToPoolWeb=(poolId)=>{
        dispatch(savePoolById(poolId));
        nav("./poolWeb");
        

    }

    

return CourseToCustomer.map(Course=><div className="div1"><><h3>{Func(Course).NameCours } </h3> {Func(Course).Dis} {Func(Course).Price} <input type="button" value="לאתר הבריכה" onClick={()=>ToPoolWeb( Func(Course).IdPool)} className="button1"></input></></div>)

}


