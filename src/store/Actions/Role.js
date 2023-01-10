import * as actionType from "../actions";
import axios from "axios";
//ייבוא של כל התפקידים
export const getAllRole=()=>{
    return dispach=>{    
        axios.get("http://localhost:50157/api/role/GetAllRole")
        .then(response=>{
            dispach({type:actionType.ALL_ROLE,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}