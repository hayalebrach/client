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
    return (dispatch) => {        
        try {
            axios.get(`http://localhost:50157/api/user/GetByIdAndPassword?name=${data.Name}&password=${data.Password}`)
            .then(res => {
                dispatch({type:actionType.LOGIN,payload:res.data});
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

 export  function ResetUser(){
    return(dispatch)=>{
        dispatch({type:actionType.RESET_USER})
    }
 }
 

 
// export const updateUser=(data)=>{
//     console.log("p");
//     console.log(data);
//     return dispatch=>{
//         axios.put("http://localhost:60342/api/user/Put?",data)
//         .then(x=> dispatch({type:actionType.UPDATE_USER,payload:data}) )
//         .catch(err=>console.log(err))
//     }
// } 
