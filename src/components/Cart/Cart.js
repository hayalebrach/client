
import { Delete } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {DeleteFromCart, SearchPool} from "../../store/Actions/Cart"
import { savePoolById } from "../../store/Actions/Pools";
import "./Cart.css";
export default  function Cart(){
  let nav=useNavigate();
  let [sum, setSum] = useState(0);
    const Cart=useSelector(state=>state.Cart);
    const dispatch=useDispatch();

    useEffect(() => { Sum()},[Cart]);
    function Sum() {

        let MySum = 0;
        Cart.forEach(element => {

            MySum+=(+element.Price);

        });
        setSum(MySum);
        return MySum;
    }


    const Func=(PoolName)=>{
      dispatch(SearchPool(PoolName));
      nav("./PoolWeb");

    }

    const ToPoolWeb=(poolId)=>{
      dispatch(savePoolById(poolId));
      nav("./poolWeb");
      

  }

    
  return(
    <>
    
    <h1>Cart</h1>
    
        {
            Cart.map(cart=><div className="Card"> כרטיסיית {cart.EntersAmount} כניסות<br/>  מחיר: {cart.Price}₪ <br/><br/> <br/> <input type="button" className="button4" value="לאתר הבריכה"  onClick={()=>ToPoolWeb(cart.IdPool)}/> <input type="button" value="מחק" className="button4" onClick={()=>{dispatch(DeleteFromCart(cart)) }}/><img src="/Pic/swimming-pool.png" className="cardImg"></img> 
            </div> )
        }
        <br/><br/>  

        <div className="Sicum">
         לתשלום:  {sum}₪<br/>
        <input type="button" value="לתשלום" className="button4" onClick={()=>{nav("./BuyingForm")}}/>

        </div>
       
   
    
    </>
  )
} 





