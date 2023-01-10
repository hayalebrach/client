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
    const Func2=()=>{
  
        for(let i=0;i<CourseToCustomer.length;i++){
         if(CourseToCustomer[i].IdCours==5)
         CourseToCustomer[i].img="../Pic/fight.png";
         
         if(CourseToCustomer[i].IdCours==10)
         CourseToCustomer[i].img="../Pic/fight.png"
         if(CourseToCustomer[i].IdCours==12)
         CourseToCustomer[i].img="../Pic/dumbbell.png"
         if(CourseToCustomer[i].IdCours==1004)
         CourseToCustomer[i].img="../Pic/yoga (1).png"
         if(CourseToCustomer[i].IdCours==1005)
         CourseToCustomer[i].img="../Pic/fight.png"} }
     
    const ToPoolWeb=(poolId)=>{
        dispatch(savePoolById(poolId));
        nav("./poolWeb");
        

    }
    

    

return CourseToCustomer.map(Course=><div className="Mdiv2"><> {Func2()} <img src={Course.img}  className="courseImg" />  <b> קורס {Func(Course).NameCours } </b> <br/> <text>{Func(Course).Dis}</text><br/> בלבדד<text> {Func(Course).Price}₪  </text> <br/><input type="button" value="לאתר הבריכה" onClick={()=>ToPoolWeb( Func(Course).IdPool)} className="button1"></input></></div>)

}


