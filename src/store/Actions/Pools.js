import axios from "axios";
export const addPool=(pool)=>{
    return(dispatch)=>{
      
        axios.post('http://localhost:8080/',pool).then(response=>{ 
            console.log(response);
            dispatch(savePool(pool))
        },err=>{
            console.log(err)
            console.log("ERRRROOORR!!")
        })
    }
} 


export const savePool=(pool)=>{
    console.log(pool.Name)
    return{
        type:"ADD_POOLS",
        payload:pool
    }
}


export const DeletePool=(id)=>{
    return(dispatch)=>{
      
        axios.delete("http://localhost:8080/"+id).then(response=>{ 
            console.log(response);
            dispatch(deletePoolByManager(id))
        },err=>{
            console.log(err)
            console.log("ERRRROOORR!!")
        })
    }
} 
export const deletePoolByManager=(poolId)=>{
    return{
        type:"Post_Deleted_By_Manager",
        payload:poolId
    }
}