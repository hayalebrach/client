import * as actionType from "../actions";
import axios from "axios";
export const ChekAndAdd = (data) => {
    return axios.put(`http://localhost:50157/api/DaysToPool/AddDaysToPool?`,data)
}
export const GetTimeByIdPool = (IdPool) => {
    return axios.get(`http://localhost:50157/api/DaysToPool/GetTimeByIdPool?IdPool=${IdPool}`)
}
export const GetSchedule=(Id)=>{
    return axios.get(`http://localhost:50157/api/DaysToPool/Get?Id=${Id}`)
}
export const Schedule=(data)=>{
    return {
        type: actionType.GET_SCHEDULE,
        payload: data
    }
}
//שריון מקום לללקוח
//בדיקה שיש מקום בבריכה בתאריך הרצוי
export const GetListOfDateAndPool=(IdPool)=>{
    return axios.get(`http://localhost:50157/api/EntCustomr/GetAllNumPeople?IdPool=${IdPool}`)
}
//שליחת נתוני השמירת מקום לדאטה בייס
export const PostEntCust=(data)=>{
    console.log(data);
    return axios.post(`http://localhost:50157/api/EntCustomr/Post?`,data);
}
//הוספת לוח זמנים לקורסים
export const ChekAndAddCours = (data) => {
    return axios.put(`http://localhost:50157/api/DaysToCours/AddDaysToPool?`,data)
}

export const GetTimeOfCoursByIdPool=(IdPool)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:50157/api/DayToCours/GetTimeByIdPool?IdPool=${IdPool}`)
        .then(response=>{
            dispatch({type:actionType.TIME_TO_COURSE_BY_POOL_ID ,payload:response.data})
               
        })
        .catch(err=> console.log(err) )
    }
}