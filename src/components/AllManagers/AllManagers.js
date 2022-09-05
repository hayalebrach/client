
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
//import {useSelector} from 'react-redux';


export default  function AllManagers(){
  //const Managers = useSelector((state) => state.fakeManagers);
  let Managers=useSelector(state =>state.Managers)
  const dispatch = useDispatch();
  return(
    <>
     <br/>
     
   
    <h1>מפרסמים</h1><br/>
    <br/>
    
    <ul>
        {
            Managers.map(Managers=><><br/> <li className="li"><text>שם:</text> {Managers.name} <br/> <text> מספר מזהה:  </text> <br/>  {Managers.email} <text> :מייל </text> </li>  </>)
        }
    </ul>
        
    </>
  )
} 





