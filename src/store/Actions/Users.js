 import * as actionType from "../actions";
 import axios from "axios";


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
                console.log(response.data);
             dispach({type:actionType.SIGNUP,payload:response.data});
         },
         err=>{

             console.log(err)
             console.log("קרתה שגיאה")
         })
     }
 }
 //הוספת מנהל
 export const AddManager=(data)=>{
    return(dispach)=> {
        console.log(data);
        axios.post("http://localhost:50157/api/user/AddUser?",data)
            .then(response=>{
               console.log(response.data);
            dispach({type:actionType.ADD_MANAGER,payload:response.data});
        },
        err=>{
            console.log(err)
            console.log("קרתה שגיאה")
        })
    }
}

 export  function Exit(){
    return(dispatch)=>{
        dispatch({type:actionType.EXIT})
    }
 }
 //קבלת המתמש מהמערך בריאקט לפי ת"ז
 export const getById=(id)=>{
    console.log("בעזרת ה' את תצליחי");
    return{
        type:actionType.GET_BY_ID_USER,
        payload:id
    }
}

 //עדכון משתמש
export const updateUser=(data)=>{
    console.log("uuuuu");
    console.log(data);
    return dispatch=>{
        axios.put("http://localhost:50157/api/user/Put?",data)
        .then(x=> dispatch({type:actionType.UPDATE_USER,payload:data}))
        .catch(err=>console.log(err))
    }
} 
//ייבוא היסטורית משתמש לבריכה מסוימת
export const getAllHistoryOfUser=(IdPool,IdUser)=>{
    console.log("ה' תודה");
    return dispatch=>{
        axios.get(`http://localhost:50157/api/Customr_To_Pool/GetHistoryOfUser?IdPool=${IdPool}&IdUser=${IdUser}`)
        .then(response=>{
            console.log(response.data);
            dispatch({type:actionType.GET_HISTORY_OF_USER_TO_POOL,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}
