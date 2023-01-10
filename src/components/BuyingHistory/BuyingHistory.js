
import {useEffect, useState} from "react"
import { useNavigate } from "react-router";
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import {getCardsToCustomer} from "../../store/Actions/Card"
import {SavePool} from "../../store/Actions/Pools"
import axios from "axios";
export default  function BuyingHistory(){
  let nav=useNavigate();
  const dispatch=useDispatch();
  const [history,SetHistory]=useState([]);
  
      const {currentUser,poolsArr}= useSelector(state => ({
      currentUser: state.currentUser,
      poolsArr:state.poolsArr
     
    }), shallowEqual);
  useEffect(()=>{
         getCardsToCustomer(currentUser.Id).then(x=>SetHistory(x.data))  
  },[history])


  const ToPoolWeb=(IdPool)=>{
    let pool=poolsArr.find(x=>x.Id==IdPool)
    dispatch(SavePool(pool));
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





