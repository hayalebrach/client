import * as actionType from "../actions";
import axios from "axios";
//פונקציה שמוסיפה לי מנהל בריכה חדש
export const AddManager = (manager) => {
    console.log("2");
    return dispatch => {
        axios.put("", manager)
            .then(x => dispatch({ type: actionType.ADD_MANAGER, payload: manager }))
            .catch(err => console.log(err))

    }
}

//כל המנהלים
export const getAllManagers=()=>{
    
    return dispatch=>{ 
       
        axios.get("http://localhost:50157/api/user/GetAllManagers")
        .then(response=>{
            alert("in");
            dispatch({type:actionType.GET_MANAGERS,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}



