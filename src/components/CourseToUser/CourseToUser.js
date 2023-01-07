import { ClassNames } from "@emotion/react";
import { useEffect ,useState} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { GetCoursesToUser,GetAllCourses } from "../../store/Actions/Cours";
import { SavePool } from "../../store/Actions/Pools";


export const CourseToUser=()=>{
const dispatch=useDispatch();
const nav=useNavigate();
const { CourseToCustomer,currentUser,poolsArr } = useSelector(state => ({
    CourseToCustomer: state.CourseToCustomer,
    currentUser:state.currentUser,
    poolsArr:state.poolsArr
    
  }), shallowEqual);

const [Courses,SetCourses]=useState([]);
useEffect(() => {
    dispatch(GetCoursesToUser(currentUser.Id));
    GetAllCourses().then(x=>SetCourses(x.data))
    }, [])

    function Func(Course){
        
        const index = Courses.findIndex(x => x.Id == Course.IdCours)
        return Courses[index];
    }

    const ToPoolWeb=(IdPool)=>{
        let pool=poolsArr.find(x=>x.Id==IdPool)
        dispatch(SavePool(pool));

        nav("./poolWeb");
        

    }

    

return CourseToCustomer.map(Course=><div className="div1"><><h3>{Func(Course).NameCours } </h3> {Func(Course).Dis} {Func(Course).Price} <input type="button" value="לאתר הבריכה" onClick={()=>ToPoolWeb( Func(Course).IdPool)} className="button1"></input></></div>)

}


