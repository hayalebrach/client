import * as actionType from "../actions";
import axios from "axios";
//קבלת כל משתמש לבריכה על פי ת"ז משתמש
export const getCardsToCustomer = (data) => {
         return axios.get(`http://localhost:50157/api/Customr_To_Pool/GetHistoryOfUser?IdUser=${data}`)
}


//  //קבלת הכרטיס מהשרת בריאקט לפי ת"ז
 export const getById=(id)=>{
    return dispach=>{
        axios.get(`http://localhost:50157/api/Packege/GetCardsById?Id=${id}`)
        .then(response=>{
            dispach({type:actionType.GET_BY_ID_CARD,payload:response.data})
            console.log(response.data);
        })
        .catch(err=> console.log(err) )
    }
}
//עדכון כרטיס
export const updateCard=(data)=>{
    console.log(data);
    return dispatch=>{
        axios.put("http://localhost:50157/api/Packege/Put?",data)
        .then(x=> dispatch({type:actionType.UPDATE_CARD,payload:x.data}))
        .catch(err=>console.log(err))
    }
} 
//פונקציה שמוסיפה כרטיס חדש
export const AddCard=(card)=>{
        axios.post("http://localhost:50157/api/Packege/AddCard?",card)    
    }
//
//פונקציה שמוסיפה מבצע חדש
export const AddSale=(Sale)=>{
    console.log(Sale);
    return dispatch=>{
        
        axios.post("http://localhost:50157/api/Sale/AddSale?",Sale)
        .then(x=> dispatch({type:actionType.ADD_SALE,payload:x.data}))
        .catch(err=>console.log(err))
       
    }
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
    return dispatch=>{
        axios.put("http://localhost:50157/api/Packege/PutForDelete?",data)
        .then(x=> dispatch({type:actionType.DELETE_CARD,payload:data}))
        .catch(err=>console.log(err))
    }
} 
export const updateAmountGet=(Id,AmountGet)=>{
    console.log(AmountGet);
    return axios.put(`http://localhost:50157/api/Customr_To_Pool/Put?Id=${Id}&AmountGet=${AmountGet}`)
}
