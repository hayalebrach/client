import * as actionType from "../actions";
import axios from "axios";

//פונקציה שמוסיפה קורס חדש
export const AddCours=(course)=>{
    console.log("the course: ", course);
    return dispatch=>{
        axios.post("http://localhost:50157/api/Cours/AddCourse?",course)
        .then(x=> dispatch({type:actionType.ADD_COURS,payload:course}))
        .catch(err=>console.log(err))
       console.log("DONE!!!");
    }
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

export const GetAllCourses=()=>{
    
    return dispatch=>{
        
        axios.get(`http://localhost:50157/api/cours`)
        .then(response=>{
            console.log(response.data);
            dispatch({type:actionType.GET_All_COURSES,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}

export const GetCoursesToUser=(IdUser)=>{
    return dispatch=>{
        
        axios.get(`http://localhost:50157/api/CoursToCustomer/GetCoursesByUser?IdUser=${IdUser}`)
        .then(response=>{
            console.log(response.data);
            dispatch({type:actionType.COURSES_TO_USER,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}

export const DeleteCourse=(CourseId)=>{
    return dispatch=>{
        axios.delete(`http://localhost:50157/api/cours/DeleteCourse?Id=${CourseId}`)
        .then(response=>{
            console.log(response.data);
            dispatch({type:actionType.DELETE_COURSE,payload:CourseId})
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
//עדכון קורס
export const updateCours=(data)=>{
    console.log(data);
    return dispatch=>{
        axios.put("http://localhost:50157/api/Cours/Put?",data)
        .then(x=> dispatch({type:actionType.UPDATE_COURS,payload:x.data}))
        .catch(err=>console.log(err))
    }
} 
 
//שמירת קורס על פי ID מנהל
export const getCours = (ID) => {

    return (dispatch) => {
        dispatch({ type: actionType.GET_COURS, payload: ID });


    }
}





