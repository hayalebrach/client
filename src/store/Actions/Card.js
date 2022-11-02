import * as actionType from "../actions";
import axios from "axios";
 //קבלת הכרטיס מהמערך בריאקט לפי ת"ז
 export const getById=(id)=>{
    return{
        type:actionType.GET_BY_ID_CARD,
        payload:id
    }
}
//עדכון כרטיס
export const updateCard=(data)=>{
    console.log("uuuuu");
    console.log(data);
    return dispatch=>{
        axios.put("http://localhost:50157/api/packege/Put?",data)
        .then(x=> dispatch({type:actionType.UPDATE_CARD,payload:data}))
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
//
//פונקציה שמוסיפה מבצע חדש
export const AddSale=(Sale)=>{
    console.log(Sale);
    return dispatch=>{
        
        axios.post("http://localhost:50157/api/Sale/AddSale?",Sale)
        .then(x=> dispatch({type:actionType.ADD_SALE,payload:Sale}))
        .catch(err=>console.log(err))
       
    }
}

//כל הכרטיסים לבריכה מסוימת
export const getAllCardByIdPool=(IdPool)=>{
    return dispach=>{
        console.log("ה' תודה");
        axios.get(`http://localhost:50157/api/packege/GetCardsByIdPool?IdPool=${IdPool}`)
        .then(response=>{
            dispach({type:actionType.GET_CARDS,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}
//פונקצית מחיקה
// export const DeletCard=(data)=>{
//     console.log(data);
//     console.log("uuuuu");
//     return dispatch=>{
//         axios.put("http://localhost:50157/api/packege/PutForDelete?",data)
//         .then(x=> dispatch({type:actionType.DELETE_CARD,payload:data}))
//         .catch(err=>console.log(err))
//     }
// } 
export const DeletCard=(data)=>{
    console.log("uuuuu");
    console.log(data);
    return dispatch=>{
        axios.put("http://localhost:50157/api/packege/PutForDelete?",data)
        .then(x=> dispatch({type:actionType.DELETE_CARD,payload:data}))
        .catch(err=>console.log(err))
    }
}  