
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Cart.css";
export default  function Cart(){
  let nav=useNavigate();
    let cart=useSelector(state=>state.cart);


  return(
    <>
    
    <h1>Cart</h1>
    
        {
            cart.map(cart=><div className="div1"> <b>שם הבריכה: </b>{cart.name}<br/> כמות כרטיסים: {cart.amount} <br/> :תאריך קניה {cart.date} <br/> סה"כ שולם:{cart.price}<br/> <input type="button" className="buttonn" value="לאתר הבריכה" onClick={()=>nav("./UserNavBar")}/></div> )
        }
   
    
    </>
  )
} 





