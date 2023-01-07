import { useEffect } from "react"
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { getAllCardByIdPool } from "../../store/Actions/Card"
import { addToCart } from "../../store/Actions/Cart";

import "./BuyTickets.css"
export default function BuyTickets() {

  const dispatch = useDispatch();

  const { CardsArr, currentPool} = useSelector(state => ({
    CardsArr: state.CardsArr,
    currentPool: state.currentPool
}), shallowEqual);
  useEffect(() => {
    dispatch(getAllCardByIdPool(currentPool.Id));

  }, []);



  const AddToCart = (Card) => {
    dispatch(addToCart(Card));
    
  }

  return (
    <>
    <div className="BuyTicketsDiv">
      <h1>כרטיסיות</h1>
      <h3>לקניה ביחידים אנא בחר כמות</h3>
      <input type="button" value="הוספה לסל"  onClick={()=>AddToCart({Price:currentPool.Price*document.getElementById("amount").value,EntersAmount:document.getElementById("amount").value})} ></input>
      <input type="number" id="amount"></input>
      <br />
      <br />
      
     
        {

          CardsArr.map(Card =><>{Card.EntersAmount!='1'?<div className="div1">  מספר כניסות: {Card.EntersAmount}<br></br> מחיר: {Card.Price} <br /><input type="button" className="button1" value="הוספה לסל" onClick={() => { AddToCart(Card) }}></input></div>:null}</>)
        }

       </div>
      

    </>
  )
}