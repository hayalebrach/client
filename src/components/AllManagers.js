import manager from "../Models/Manager";
import {Component, useEffect, useState} from "react"
import AddDetailsManager from "./AddDetailsManager/AddDetailsManager";

export  default  function AllManagers(){
    const [Managers,SetManagers]=useState([]);
  useEffect(()=>{
      const fakeManagers=
      [
        {name:"ליאל",phone:1212,email:"lieli@gmail.com"},
        {name:"חיוש",phone:2212,email:"chayush@gmail.com"},
        {name:"סיווני",phone:121572,email:"sivani@gmail.com"},
        {name:"ספירוש",phone:555545,email:"sapirush@gmail.com"}
      ];

      SetManagers(fakeManagers);
  },[])
  const AddManager=(e)=>{  
      let a = [...Managers,e]; 
      SetManagers({a});
 
   }
  return(
    <>
    <AddDetailsManager AddManager={AddManager}/>
     <br/>
     
   
    <h1>מפרסמים</h1><br/>
    <br/>
    
    <ul>
        {
            Managers.map(manager=><><br/> <li className="li"><text>שם:</text> {manager.name} <br/>  {manager.email} <text> :מייל </text> </li>  </>)
        }
    </ul>
        
    </>
  )
} 







