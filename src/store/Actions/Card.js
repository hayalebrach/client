import * as actionType from "../actions";
import axios from "axios";
// export const UpdateCard=(card)=>{
//       return dispatch=>{
//           axios.get("",card)
//           .then(x=>dispatch({type:actionType.UPDATE_CARD,payload:card}))
//           .catch(err=>console.log(err))
//          
//       }
//     }

//פונקציה שמוסיפה כרטיס חדש
export const AddCard=(card)=>{
    console.log(card);
    return dispatch=>{
        axios.put("",card)
        .then(x=> dispatch({type:actionType.ADD_CARD,payload:card}))
        .catch(err=>console.log(err))
       
    }
}
//פונקציה שמעדכנת מבצע חדש
export const AddSale=(sale)=>{
    console.log("sale");
    console.log(sale);
    return dispatch=>{
        axios.put("",sale)
        .then(x=> dispatch({type:actionType.ADD_SALE,payload:sale}))
        .catch(err=>console.log(err))
       
    }
}

