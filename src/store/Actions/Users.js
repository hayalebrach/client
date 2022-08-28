import * as actionType from "../actions";
import axios from "axios";
//פונקצית הוספת משתמש
export const addUser=(user)=>{
    return(dispach)=>{
        axios.post("http://localhost:8080/חחחחחחחחחחחחחח",user).then(response=>{
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
