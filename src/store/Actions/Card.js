import * as actionType from "../actions";
import axios from "axios";
export const UpdateCard=(card)=>{
      return dispatch=>{
          axios.get("",card)
          .then(x=>dispatch({type:actionType.UPDATE_CARD,payload:card}))
          .catch(err=>console.log(err))
         
      }
    }



//פונקציה שמוסיפה כרטיס חדש
export const AddCard=(card)=>{
    console.log("the carddd" ,card);
    return dispatch=>{
        axios.post("http://localhost:50157/api/Packege/AddCard?",card)
        .then(x=> dispatch({type:actionType.ADD_CARD,payload:card}))
        .catch(err=>console.log(err))
       
    }
}
//פונקציה שמוסיפה מבצע חדש
export const AddSale=(Sale)=>{
    console.log(Sale);
    return dispatch=>{
        
        axios.post("http://localhost:50157/api/Sale/AddSale?",Sale)
        .then(x=> dispatch({type:actionType.ADD_SALE,payload:Sale}))
        .catch(err=>console.log(err))
       
    }
}

//כל המשתמשים
export const getAllCard=()=>{
    return dispach=>{
        
        axios.get("http://localhost:50157/api/user/GetAllUsers")
        .then(response=>{
            dispach({type:actionType.GET_USERS,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}