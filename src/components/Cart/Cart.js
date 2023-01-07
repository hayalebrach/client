
import { Delete } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import {DeleteFromCart} from "../../store/Actions/Cart"
import { SavePool } from "../../store/Actions/Pools";
import "./Cart.css";
export default  function Cart(){
  let nav=useNavigate();
  let [sum, setSum] = useState(0);

    const { poolsArr,Cart } = useSelector(state => ({
      Cart:state.Cart,
      poolsArr:state.poolsArr
      
    }), shallowEqual);


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
      let pool=poolsArr.find(x=>x.Name==PoolName)
      dispatch(SavePool(pool));
      nav("./PoolWeb");

    }

    const ToPoolWeb=(poolId)=>{
      let pool=poolsArr.find(x=>x.Id==poolId)
      dispatch(SavePool(pool));
      nav("./poolWeb");
      

  }

    
  return(
    <>
    
    <h1>Cart</h1>
    
        {
            Cart.map(cart=><div className="div1"> כמות כניסות:{cart.EntersAmount}<br/>  מחיר: {cart.Price} <br/><br/> <br/> <input type="button" className="buttonn" value="לאתר הבריכה"  onClick={()=>ToPoolWeb(cart.IdPool)}/> <input type="button" value="מחק" className="button1" onClick={()=>{dispatch(DeleteFromCart(cart)) }}/>
            </div> )
        }
        <br/><br/>  

        <div className="Sicum">
         לתשלום:  {sum}₪<br/>
        <input type="button" value="לתשלום" className="button1" onClick={()=>{nav("./BuyingForm")}}/>

        </div>
       
   
    
    </>
  )
} 





