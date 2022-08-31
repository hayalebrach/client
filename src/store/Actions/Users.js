 import * as actionType from "../actions";
 import axios from "axios";
//פונקצית הוספת משתמש
export const addUser=(user)=>{
    return(dispach)=>{
        axios.post("http://localhost:8080/signup",user).then(response=>{
            dispach(SaveUser({...user,id:response.data}))
        },


        err=>{
            console.log(err);
            console.log("!שגיאה")
        })

    }
}

//פונקצית התחברות
export const login=(user)=>{
    return(dispach)=>{
        axios.post("http://localhost:8080/login",user).then(res=>{
            
            if(res.data.success)
          {
              console.log("התחברת בהצלחה")
              console.log(res.data.user)
              dispach(SaveUser(res.data.user))}
            else
            alert(res.data.massage)
        },
        err=>{
            console.log(err);
            console.log("!שגיאה")
        })
    }
}
export const SaveUser=(user)=>{
    return {
        type:actionType.LOGIN,
        payload:user
    }
}

// export const login=(data)=>{
//     console.log(data);
    
//     return dispatch=>{
//         axios.get("http://localhost:50157/api/user?name=SARA&password=123456",data)
//         .then(x=> dispatch({type:actionType.LOGIN,payload:data}))
//         .catch(err=>console.log(err))  
//     }
// }

