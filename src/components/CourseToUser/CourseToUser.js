import { ClassNames } from "@emotion/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { GetCoursesToUser, GetAllCourses, GetAllCoursesByPool } from "../../store/Actions/Cours";
import { SavePool } from "../../store/Actions/Pools";


export const CourseToUser = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { CourseToCustomer, currentUser, poolsArr } = useSelector(state => ({
        CourseToCustomer: state.CourseToCustomer,
        currentUser: state.currentUser,
        poolsArr: state.poolsArr

    }), shallowEqual);


    const [Courses, SetCourses] = useState(null);
    useEffect(() => {
        dispatch(GetCoursesToUser(currentUser.Id));
        GetAllCourses().then(x=>{fff(x.data)})
        console.log("AYOOO",Courses);
    }, [Courses])

    const fff=(data)=>{
        console.log("xxxx",data);
        SetCourses(data);
        console.log("COURSES",Courses);

    }

    function Func(Course) {

        let index = Courses.findIndex(x => x.Id == Course.IdCours);
        return Courses[index];
    }


    const ToPoolWeb = (IdPool) => {
        let pool = poolsArr.find(x => x.Id == IdPool);
        dispatch(SavePool(pool));

        nav("./poolWeb");


    }

    return(CourseToCustomer.map(Course => <div className="Mdiv2"><>   <b> קורס {Func(Course).NameCours} </b> <br /> <text>{Func(Course).Dis}</text><br /> בלבדד<text> {Func(Course).Price}₪  </text> <br /><input type="button" value="לאתר הבריכה" onClick={() => ToPoolWeb(Func(Course).IdPool)} className="button1"></input></></div>)) 

}


