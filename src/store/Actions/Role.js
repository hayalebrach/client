import * as actionType from "../actions";
import axios from "axios";
export const getAllRole=()=>{
    return dispach=>{
        
        axios.get("http://localhost:50157/api/role/GetAllRole")
        .then(response=>{
            console.log(response.data);
            dispach({type:actionType.ALL_ROLE,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}

export const AddRole=(data)=>{
    return dispach=>{
        console.log("gfghresht")
        axios.post("http://localhost:50157/api/role/AddRole?",data)
        .then(response=>{
            console.log(response.data);
            dispach({type:actionType.ADD_ROLE,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}