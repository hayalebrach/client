 import * as actionType from "../actions";
 import axios from "axios";
import { object } from "yup";
import { Pool } from "@material-ui/icons";

 //התחברות
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

export const GetUserById = (UserId) => {
    return (dispatch) => {        
        try {
            axios.get(`http://localhost:50157/api/user/GetById?Id=${UserId}`)
            .then(res => {
                dispatch({type:actionType.GET_BY_ID,payload:res.data});
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

     data={...data,Status:true}
     return axios.post("http://localhost:50157/api/User/AddUser?",data)
 }

 export  function Exit(){
    return(dispatch)=>{
        dispatch({type:actionType.EXIT})
    }
 }
 //קבלת המשתמש מהמערך בריאקט לפי ת"ז
 export const getById=(id)=>{
    
    return{
        type:actionType.GET_BY_ID_USER,
        payload:id
    }
}

//  //עדכון משתמש
export const updateUser=(data)=>{
//     console.log("uuuuu");
//     console.log(data);
//     return dispatch=>{
//         axios.put("http://localhost:50157/api/user/Put?",data)
//         .then(x=> dispatch({type:actionType.UPDATE_USER,payload:data}))
//         .catch(err=>console.log(err))
//     }
 } 
//ייבוא היסטורית משתמש לבריכה מסוימת
export const getAllHistoryOfUser=(IdPool,IdUser)=>{
    console.log("ה' תודה");
    return dispatch=>{
        axios.get(`http://localhost:50157/api/Customr_To_Pool/GetHistoryByIdPoolAndIdUser?IdUser=${IdUser}&IdPool=${IdPool}`)
        .then(response=>{
            console.log(response.data);
            dispatch({type:actionType.GET_HISTORY_OF_USER_TO_POOL,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}

export const getCustomerToPool=()=>{
    return dispatch=>{
        axios.get("http://localhost:50157/api/Customr_To_Pool/AllCustomersToPool").then(response=>{
            console.log(response.data);
            dispatch({type:actionType.Customer_To_Pool,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
     
}
export const getCustomerToPoolByPoolId=(PoolId)=>{
    return dispatch=>{
       
        axios.get(`http://localhost:50157/api/Customr_To_Pool/CustomersToPool?IdPool=${PoolId}`).then(response=>{
            console.log(response.data);
            dispatch({type:actionType.CUSTOMER_TO_POOL_BY_ID_POOL,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
     
}

export const sendMail=(body,Mail,subject)=>{
    console.log(Mail,body,subject);
    return axios.get(`http://localhost:50157/api/user/SendMail?body=${body}&mail=${Mail}&subject=${subject}`)
}
export const GetUserByMail=(mail)=>{
    return axios.get(`http://localhost:50157/api/user/getUserByMail?mail=${mail}`)
    
}
export const changeThePassword=(Id,Password)=>{
    console.log(Id);
    return axios.put(`http://localhost:50157/api/user/PutPassWord?PassWord=${Password}&Id=${Id}`)
    
}
//פונקציה שמעדכנת כניסה אחרונה
export const LastDate=(data)=>{
    data.LastEntery=new Date();
    console.log(data);
    return axios.put(`http://localhost:50157/api/user/LastEnteryDate?`,data)
}
export const getTheGuid=(data)=>{
   
    axios.get(`http://localhost:50157/api/user/GetByIdAndPassword?name=${data.Name}&password=${data.Password}`)
}

export const getAllUsers=()=>{
    return dispatch=>{
        axios.get("http://localhost:50157/api/User/GetAllUsers").then(response=>{
            dispatch({type:actionType.ALL_USERS,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
     
}
export const users=()=>{
    return axios.get("http://localhost:50157/api/User/GetAllUsers")
}


