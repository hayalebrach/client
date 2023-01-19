import * as actionType from "../actions";
import axios from "axios";
//קבלת כל משתמש לבריכה על פי ת"ז משתמש
export const getCardsToCustomer = (data) => {
         return axios.get(`http://localhost:50157/api/Customr_To_Pool/GetHistoryOfUser?IdUser=${data}`)
}
//  //קבלת הכרטיס מהשרת בריאקט לפי ת"ז
 export const getById=(id)=>{
      return axios.get(`http://localhost:50157/api/Packege/GetCardsById?Id=${id}`)
}
export const TheCard=(data)=>{
    return(dispach)=>dispach({
          type:actionType.GET_CARD,
          payload:data
    })
}
//עדכון כרטיס
export const updateCard=(data)=>{
    return  axios.put("http://localhost:50157/api/Packege/Put?",data)

}
//פונקציה שמוסיפה כרטיס חדש
export const AddCard=(card)=>{
        axios.post("http://localhost:50157/api/Packege/AddCard?",card)    
}
//כל הכרטיסים לבריכה מסוימת
export const getAllCardByIdPool=(IdPool)=>{
    return dispach=>{
        axios.get(`http://localhost:50157/api/Packege/GetCardsByIdPool?IdPool=${IdPool}`)
        .then(x=>{
            dispach({type:actionType.GET_CARDS,payload:x.data})
        })
        .catch(err=>console.log(err) )
    }
} 
export const DeletCard=(data)=>{
    return axios.put("http://localhost:50157/api/Packege/PutForDelete?",data)
} 
export const updateAmountGet=(Id,AmountGet)=>{
    console.log(AmountGet);
    return axios.put(`http://localhost:50157/api/Customr_To_Pool/Put?Id=${Id}&AmountGet=${AmountGet}`)
}


export const getAllCards=()=>{
    return dispach=>{
        axios.get("http://localhost:50157/api/Packege/GetAllCards").then(x=>{
            dispach({type:actionType.GET_ALL_CARDS,payload:x.data})
        })
        .catch(err=>console.log(err) )
    }
} 


