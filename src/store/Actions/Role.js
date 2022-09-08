import * as actionType from "../actions";
import axios from "axios";
//ייבוא של כל התפקידים
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
//הוספת תפקיד
export const AddRole=(data)=>{
    return dispach=>{
        axios.post("http://localhost:50157/api/role/AddRole?",data)
        .then(response=>{
            console.log(response.data);
            dispach({type:actionType.ADD_ROLE,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}