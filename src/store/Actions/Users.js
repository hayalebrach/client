 import * as actionType from "../actions";
 import axios from "axios";

//כל המשתמשים
export const getAllUser=()=>{
    return dispach=>{
        
        axios.get("http://localhost:50157/api/user/GetAllUsers")
        .then(response=>{
            console.log(response.data);
            dispach({type:actionType.GET_USERS,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}
//לוגין
export const login = (data) => {
    console.log(data.userName)
    return (dispatch) => { 
        
        try {

            console.log("heyyy");
            axios.get(`http://localhost:50157/api/user/GetByIdAndPassword?${data.userName}${data.password}`, data)
            .then(res => {
                dispatch({type:actionType.LOGIN,payload:data});
                console.log("res.data");
            }).catch(err => {
                console.log(err);
            })
        }
        catch (err) {
            
            console.log(err);
        }
    }

}
// //הוספת משתמש
 export const AddUser=(data)=>{
     return(dispach)=> {
         console.log(data);
         axios.post("http://localhost:50157/api/user/AddUser?",data)
             .then(response=>{
             dispach({type:actionType.SIGNUP,payload:response.data});
         },
         err=>{

             console.log(err)
             console.log("קרתה שגיאה")
         })
     }
 }
