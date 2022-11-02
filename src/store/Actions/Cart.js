import * as actionType from "../actions";
import axios from "axios";
export const SearchPool = (PoolName)=>{
    return (dispatch) => { 
        dispatch({type:actionType.SEARCH_POOL,payload:PoolName});


    }
}