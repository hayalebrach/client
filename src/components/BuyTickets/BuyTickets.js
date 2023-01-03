import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllCardByIdPool } from "../../store/Actions/Card"
import { addToCart } from "../../store/Actions/Cart";

import "./BuyTickets.css"
export default function BuyTickets() {

  const dispatch = useDispatch();
  const currentPool = useSelector(state => state.currentPool);


  useEffect(() => {
    dispatch(getAllCardByIdPool(currentPool.Id));

  }, []);

  const Cards = useSelector(state => state.CardsArr);

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
          Cards.map(Card => <>  <div className="Card"> כרטיסיית {Card.EntersAmount} כניסות<br></br> מחיר: {Card.Price}₪ <br /><input type="button" className="button4" value="הוספה לסל" onClick={() => { AddToCart(Card) }}></input><img src="/Pic/swimming-pool.png" className="cardImg"></img>  </div></>)
        }

       </div>
      

    </>
  )
}