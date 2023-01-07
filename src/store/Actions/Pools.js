import axios from "axios";
import * as actionType from "../actions";

//פונקציה שמוסיפה לי בריכה חדשה
export const AddPool=(data)=>{
    return axios.post("http://localhost:50157/api/pool/AddPool?", data)

}
//כל האיזורים
export const getAllErea = () => {
     return axios.get("http://localhost:50157/api/erea/GetAllEreas")
}

export const SavePool=(data)=>{
    return dispach=>{
         dispach({
             type:actionType.SAVE_POOL,
             payload:data
         })
    }
}

export const GetAllPools = () => {
    return dispach => {
        axios.get("http://localhost:50157/api/pool/GetAllPools")
            .then(response => {
                console.log(response.data);
                dispach({ type: actionType.GET_POOLS, payload: response.data })

            })
            .catch(err => console.log(err))

    }
}
//כל הימים
export const getAllDays = () => {
    return (dispach) => {
        axios.get("http://localhost:50157/api/days/GetAllDays")
            .then(response => {
                dispach({ type: actionType.ALL_DAYS, payload: response.data })
            })
            .catch(err => console.log(err))
    }
}
export const getAllUsersByIdPool = (IdPool) => {
    return (dispach) => {
        axios.get(`http://localhost:50157/api/Customr_To_Pool/GetByIdPool?IdPool=${IdPool}`)
            .then(response => {
                dispach({ type: actionType.GET_USERS_BY_ID_POOL, payload: response.data })
            })
            .catch(err => console.log(err))
    }
}