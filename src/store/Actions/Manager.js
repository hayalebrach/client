import * as actionType from "../actions";
import axios from "axios";
// //פונקציה שמוסיפה לי מנהל בריכה חדש
//כל המנהלים
export const getAllManagers=()=>{
    return axios.get("http://localhost:50157/api/user/GetAllManagers")
}



