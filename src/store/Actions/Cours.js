import * as actionType from "../actions";
import axios from "axios";
export const AddCours=(course)=>{
    return axios.post("http://localhost:50157/api/Cours/AddCourse?",course)

}
//פונקציה שלוקחת את הקורסים לבריכה מסוימת
export const GetAllCoursesByPool=(IdPool)=>{
    return dispatch=>{      
        axios.get(`http://localhost:50157/api/cours/GetCoursesByPool?IdPool=${IdPool}`)
        .then(response=>{
            dispatch({type:actionType.GET_COURSES,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}
//פונקציה שלוקחת את כל הקורסם לכל הבריכות
export const GetAllCourses=()=>{
    return dispatch=>{
        axios.get(`http://localhost:50157/api/cours`).then(response=>{
            
            dispatch({type:actionType.ALL_COURSES,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
 
}
//קורסים למשתמש לפי משתמש
export const GetCoursesToUser=(IdUser)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:50157/api/CoursToCustomer/GetCoursesByUser?IdUser=${IdUser}`)
        .then(response=>{
            dispatch({type:actionType.COURSES_TO_USER,payload:response.data})

        })
        .catch(err=> console.log(err) )
    }
}

export const GetCoursesToUserByIdPool=(IdPool)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:50157/api/CoursToCustomer/GetCoursesToUserByIdPool?IdPool=${IdPool}`)
        .then(response=>{
            dispatch({type:actionType.COURSES_TO_USER_BY_ID_POOL,payload:response.data})

        })
        .catch(err=> console.log(err) )
    }
}

//כל הקורסים שנרשמו אליהם
export const GetAllCoursesToUser=(IdUser)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:50157/api/CoursToCustomer`)
        .then(response=>{
            dispatch({type:actionType.ALL_COURSES_TO_CUSTOMER,payload:response.data})

        })
        .catch(err=> console.log(err) )
    }
}
export const Course_Enrollment=(user)=>{
    return dispatch=>{
        axios.post("http://localhost:50157/api/CoursToCustomer/Course_Enrollment?",user)
        .then(x=> dispatch({type:actionType.COURSE_ENROLLMENT,payload:user}))
        .catch(err=>console.log(err))
       
    }
}
export const updateCours=(data)=>{
    return axios.put("http://localhost:50157/api/Cours/Put?",data)

}
//שמירת קורס על פי ID מנהל
export const getCours = (ID) => {

    return (dispatch) => {
        dispatch({ type: actionType.GET_COURS, payload: ID });


    }
}
export const Delete=(data)=>{
    return  axios.put("http://localhost:50157/api/Cours/PutForDelete?",data)
}
export const postGuideToPool=(data)=>{
    return axios.post(`http://localhost:50157/api/RolesToPool/AddGuide?`,data);
}





