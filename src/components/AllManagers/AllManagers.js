
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
//import {useSelector} from 'react-redux';


export default  function AllManagers(){
  //const Managers = useSelector((state) => state.fakeManagers);
  let Managers=useSelector(state =>state.Managers);
  
  return(
    <>
     <br/>
     
   
    <h1>מפרסמים</h1><br/>
    <br/>
    
    <ul>
        {
            Managers.map(Manager=><><br/> <div className="div1"><text>שם:</text> {Manager.Name} <br/> <text> מספר מזהה:  </text> <br/>  {Manager.Email} <text> :מייל </text> </div>  </>)
        }
    </ul>
        
    </>
  )
} 





