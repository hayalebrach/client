
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {SearchPool} from "../../store/Actions/Cart"
import "./Cart.css";
export default  function Cart(){
  let nav=useNavigate();
  let [sum, setSum] = useState(0);
    let cart=useSelector(state=>state.Cart);
    const dispatch=useDispatch();

    useEffect(() => { Sum()});
    function Sum() {

        let MySum = 0;
        cart.forEach(element => {
            
            MySum+=(+element.Pay);

        });
        setSum(MySum);
        return MySum;
    }


    const Func=(PoolName)=>{
      dispatch(SearchPool(PoolName));
      nav("./PoolWeb");

    }
  return(
    <>
    
    <h1>Cart</h1>
    
        {
            cart.map(cart=><div className="div1"> <b>שם הבריכה: </b>{cart.PoolName}<br/> כמות כרטיסים: {cart.CardsAmount} <br/> :תאריך קניה {cart.date} <br/>:תוקף {cart.validity}<br/> סה"כ תשלו ם:{cart.Pay}<br/> <input type="button" className="buttonn" value="לאתר הבריכה" onClick={()=>Func(cart.PoolName)}/></div> )
        }
        <br/><br/>  

        <div className="Sicum">
         לתשלום:  {sum}₪<br/>
        <input type="button" value="לתשלום" className="button1" onClick={()=>{nav("./BuyingForm")}}/>
        </div>
       
   
    
    </>
  )
} 





