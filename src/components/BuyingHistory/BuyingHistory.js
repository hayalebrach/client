
import {useEffect, useState} from "react"
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getCardsToCustomer} from "../../store/Actions/Card"
import {savePoolById} from "../../store/Actions/Pools"
import axios from "axios";
export default  function BuyingHistory(){
  let nav=useNavigate();
  const dispatch=useDispatch();
  const [history,SetHistory]=useState([]);
  const currentUser=useSelector(state=>state.currentUser);
  useEffect(()=>{
         getCardsToCustomer(currentUser.Id).then(x=>SetHistory(x.data))  
  },[history])


  const ToPoolWeb=(IdPool)=>{
    dispatch(savePoolById(IdPool));
    console.log()
    nav("./poolWeb");

}
  return(
    <>
    <h1>הסטוריית הזמנות</h1>
    
        {
            history.map(cart=><div className="div1"> כמות כרטיסים: {cart.AmountLeft} <br/>  כרטיסים שמומשו: {cart.AmountGet} <br/>:תאריך קניה {cart.DateBuy} <br/> סה"כ שולם:{cart.TotalPrice}<br/><input type="button" value="לאתר הבריכה" onClick={()=>ToPoolWeb(cart.IdPool)} className="button1"></input></div> )
        }
   
    
    </>
  )
} 





