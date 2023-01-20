import { ClassNames } from "@emotion/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { GetCoursesToUser, GetAllCourses, GetAllCoursesByPool } from "../../store/Actions/Cours";
import { SavePool } from "../../store/Actions/Pools";


export const CourseToUser = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { CourseToCustomer, currentUser, poolsArr,Courses } = useSelector(state => ({
        CourseToCustomer: state.CourseToCustomer,
        currentUser: state.currentUser,
        poolsArr: state.poolsArr,
        Courses:state.allCourses

    }), shallowEqual);

    useEffect(() => {
        
        dispatch(GetCoursesToUser(currentUser.Id));
       
        console.log("all",Courses);
        console.log("touser",CourseToCustomer);
       
    },[])

    function Func(Course){  
        let index;
        for(let i=0;i<Courses.length;i++){
            if(Courses[i].Id==Course.IdCours)
             index =i;
        }      
        
       
        return Courses[index];
    }


    const ToPoolWeb = (IdPool) => {
        let pool = poolsArr.find(x => x.Id == IdPool);
        dispatch(SavePool(pool));
        nav("./poolWeb");

    }

    return(CourseToCustomer.map(Course => <div className="Mdiv2"><>   <b> קורס {Func(Course).NameCours} </b> <br /> <text>{Func(Course).Dis}</text><br /> בלבדד<text> {Func(Course).Price}₪  </text> <br /><input type="button" value="לאתר הבריכה" onClick={() => ToPoolWeb(Func(Course).IdPool)} className="button1"></input></></div>)) 

}


