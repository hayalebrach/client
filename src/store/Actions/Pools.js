import axios from "axios";
import * as actionType from "../actions";

//פונקציה שמוסיפה לי בריכה חדשה
export const AddPool=(data)=>{
    console.log(data)
    return(dispach)=> {
        console.log(data);
        axios.post("http://localhost:50157/api/pool/AddPool?",data)
            .then(response=>{
               console.log(response.data);
            dispach({type:actionType.ADD_POOL,payload:response.data});
        },
        err=>{

            console.log(err)
            console.log("קרתה שגיאה");
        })
    }
}
//כל האיזורים
export const getAllErea=()=>{
    return (dispach)=>{    
        axios.get("http://localhost:50157/api/erea/GetAllEreas")
        .then(response=>{
            dispach({type:actionType.ALL_EREAS,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}
//כל הימים
export const getAllDays=()=>{
    return (dispach)=>{    
        axios.get("http://localhost:50157/api/days/GetAllDays")
        .then(response=>{
            dispach({type:actionType.ALL_DAYS,payload:response.data})
        })
        .catch(err=> console.log(err) )
    }
}
//הוספת לוח זמניים למערך שבסטייט הכללי
export const AddToArraySchedule = (schedule) => {
    console.log(schedule);
    return {
        type:actionType.ADD_SCHEDULE_TO_ARRAY,
        payload:schedule
    } 
}
