import * as actionType from "../actions";
import axios from "axios";
//כל המנהלים
export const getAllManagers=()=>{
    return axios.get("http://localhost:50157/api/user/GetAllManagers")
}



