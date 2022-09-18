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
export const savePool = (data) => {
    console.log(data.Name);
    return (dispatch) => { 
        console.log("LETS GOOOO");
        dispatch({type:actionType.SAVE_POOL,payload:data});

    }

}

export const GetAllPools=()=>{
    return dispatch=>{
       
        axios.get("http://localhost:50157/api/Pool/GetAllPools")
         .then(response=>{
            
            console.log(response.data);
            dispatch({type:actionType.GET_POOLS,payload:response.data})
        })
         .catch(err=> console.log(err))
    }
}


