import axios from "axios";
import * as actionType from "../actions";

//פונקציה שמוסיפה לי בריכה חדשה
export const AddPool=(pool)=>{
    console.log("yyyyy");
    console.log(pool);
    return dispatch=>{
        console.log("yyyyy");
        axios.put("",pool)
        .then(x=> dispatch({type:actionType.ADD_POOLS,payload:pool}))
        .catch(err=>console.log(err))
       
    }
}
