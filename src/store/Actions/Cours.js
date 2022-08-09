import * as actionType from "../actions";
import axios from "axios";

//פונקציה שמוסיפה כרטיס חדש
export const AddCours=(cours)=>{
    console.log(cours);
    return dispatch=>{
        axios.put("",cours)
        .then(x=> dispatch({type:actionType.ADD_CARD,payload:cours}))
        .catch(err=>console.log(err))
       
    }
}