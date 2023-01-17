import { useEffect } from "react"
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { getAllCardByIdPool,getById,DeletCard,TheCard } from "../../store/Actions/Card"
import { addToCart } from "../../store/Actions/Cart";

import "./BuyTickets.css"
export const BuyTickets=()=> {

  const dispatch = useDispatch();
  const nav=useNavigate();
  const { CardsArr, currentPool,currentUser} = useSelector(state => ({
    CardsArr: state.CardsArr,
    currentPool: state.currentPool,
    currentUser:state.currentUser
}), shallowEqual);
  useEffect(() => {
    dispatch(getAllCardByIdPool(currentPool.Id));

  }, []);

  const update=(Id)=>{
    console.log(Id);
    getById(Id).then(x=>func(x.data));
    
  }
  const func=(data)=>{
  
    console.log(data);
    dispatch(TheCard(data));
    nav(("/UpdateCard/"+true));
  }
  const Delet=(Id)=>{
    let card=CardsArr.find(x=>x.Id==Id)
    DeletCard(card).then(alert("כרטיס זה נמחק מרשימת הכרטיסים לבריכה זו")); 
  }

  const AddToCart = (Card) => {
    dispatch(addToCart(Card));
    
  }

  return (
    <>
    <div className="BuyTicketsDiv">
      <h1>כרטיסיות</h1>
    {currentUser.IdRole==2?<input type="button" value="הוספת קורס" onClick={()=>nav("/AddDetailsCard/true")}/>:<>  <h3>לקניה ביחידים אנא בחר כמות</h3>
      <input type="button" value="הוספה לסל"  onClick={()=>AddToCart({Price:currentPool.Price*document.getElementById("amount").value,EntersAmount:document.getElementById("amount").value})} ></input>
      <input type="number" id="amount"></input>
      <br />
      <br />
      </>}
    
      
     
        {

          CardsArr.map(Card =><>{Card.EntersAmount!='1'?<div className="div1">  מספר כניסות: {Card.EntersAmount}<br></br> מחיר: {Card.Price} <br />
         {currentUser.IdRole==2?
<>
<input type="button" value="עדכן" className="Mbutton1" onClick={()=>update(Card.Id)}/>
<input type="button" value="מחק" className="Mbutton1" onClick={()=>Delet(Card.Id)}/>
</>
:
<input type="button" className="button1" value="הוספה לסל" onClick={() => { AddToCart(Card) }}></input>
}
        
          
          
          
          </div>:null}</>)
        }

       </div>
      

    </>
  )
}
export default BuyTickets;