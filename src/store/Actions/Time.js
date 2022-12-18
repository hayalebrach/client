import * as actionType from "../actions";
import axios from "axios";
export const ChekAndAdd = (data) => {
    return axios.put(`http://localhost:50157/api/DaysToPool/AddDaysToPool?`,data)
}
export const GetTimeByIdPool = (IdPool) => {
    return axios.get(`http://localhost:50157/api/DaysToPool/GetTimeByIdPool?IdPool=${IdPool}`)
}