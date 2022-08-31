import * as actionType from "../actions";
import axios from "axios";
export const getAllRole=()=>{
    return dispach=>{
        
        axios.get("http://localhost:50157/api/user/GetAllRole")
        .then(response=>{
            console.log(response.data);
            dispach({type:actionType.ALL_ROLE,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}