import * as actionType from "../actions";
import axios from "axios";
export const SearchPool = (PoolName)=>{
    return (dispatch) => { 
        dispatch({type:actionType.SEARCH_POOL,payload:PoolName});

    }
}
//הוספה לעגלת קניות
export const addToCart = (Purchase)=>{
    
    return (dispatch) => { 
        dispatch({type:actionType.ADD_TO_CART,payload:Purchase});
        
    }
}

export const DeleteFromCart = (Purchase)=>{
    
    return (dispatch) => { 
        dispatch({type:actionType.DELETE_FROM_CART,payload:Purchase});
        
    }
}



//קניה סופית של המוצרים בעגלה
export const Purchasing = (Purchase)=>{
    
    return (dispatch) => { 
         axios.post("http://localhost:50157/api/Customr_To_Pool/Purchasing?",Purchase)
        .then(x=> dispatch({type:actionType.PURCHASING,payload:Purchase}))
        .catch(err=>console.log(err))

    }
}