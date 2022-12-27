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
//שריון מקום לללקוח
//בדיקה שיש מקום בבריכה בתאריך הרצוי
export const GetListOfDateAndPool=(IdPool,date)=>{
    console.log(IdPool);
    console.log(date);
    return axios.get(`http://localhost:50157/api/EntCustomr/GetAllNumPeople?IdPool=${IdPool}&date=${date}`)
}