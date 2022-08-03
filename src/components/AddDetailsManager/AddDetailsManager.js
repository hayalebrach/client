import Manager from "../../Models/Manager";
import {useEffect, useState} from "react"
import { useNavigate } from "react-router";
const AddDetailsManager=(props)=>{
    let nav=useNavigate();
    //const [Managers,SetManagers]=useState([]);

   let Manager={
       name:"",
       phone:0,
       email:""
   }
   const change=(e)=>{
    let { name, type, value } = e.target;
    if (type === "number")
         value = +value;
 
 Manager[name]=value;
}
const Sof=()=>{
 
    alert(Manager.name+" "+Manager.phone+" "+Manager.email);
    //AllManagers.AddManager(Manager);
    nav("/AddPool");
}
    return (<>
        <h1>AddDetailsManager</h1> 
        <input type="text" placeholder="הכנס שם מלא" name="name"onChange={change}></input>
        <input type="number" placeholder="הכנס פלאפון" name="phone"onChange={change}></input>
        <input type="email" placeholder="הכנס כתובת דוא'ל" name="email"onChange={change}></input>
        <button onClick={()=>{props.AddManager(Manager)}}>הוסף</button>
            </>)
    }
    export default AddDetailsManager;