 import * as actionType from "../actions";
 import axios from "axios";
// //פונקצית הוספת משתמש
// export const addUser=(user)=>{
//     return(dispach)=>{
//         axios.post("http://localhost:8080/חחחחחחחחחחחחחח",user).then(response=>{
//             dispach(SaveUser({...user,id:response.data}))
//         },

//         err=>{
//             console.log(err);
//             console.log("קרתה שגיאה")
//         })

//     }
// }
// export const SaveUser=(user)=>{
//     return {
//         type:actionType.LOGIN,
//         payload:user
//     }
// }
// //פונקצית התחברות
// export const login=(user)=>{
//     return(dispach)=>{
//         axios.post("http://localhost:8080/חחחחח",user).then(res=>{
            
//             if(res.data.success)
//           {
//               console.log("התחברת בהצלחה")
//               console.log(res.data.user)
//               dispach(Login(res.data.user))}
//             else
//             alert(res.data.massage)
//         },
//         err=>{
//             console.log(err);
//             console.log("קרתה שגיאה")
//         })
//     }
// }
// export const Login=(user)=>{
//     return{
//         type:"USER_CONNECT",
//         payload:user
//     }
// }
export const login=(data)=>{
    console.log(data);
    
    return dispatch=>{
        axios.get("http://localhost:50157/api/user?name=SARA&password=123456",data)
        .then(x=> dispatch({type:actionType.LOGIN,payload:data}))
        .catch(err=>console.log(err))  
    }
}