import { useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { getAllCardByIdPool, getById, DeletCard, TheCard } from "../../store/Actions/Card"
import { addToCart } from "../../store/Actions/Cart";

import "./BuyTickets.css"
export const BuyTickets = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const { CardsArr, currentPool, currentUser } = useSelector(state => ({
    CardsArr: state.CardsArr,
    currentPool: state.currentPool,
    currentUser: state.currentUser
  }), shallowEqual);
  useEffect(() => {
    dispatch(getAllCardByIdPool(currentPool.Id));

  }, []);

  const update = (Id) => {
    console.log(Id);
    getById(Id).then(x => func(x.data));

  }
  const func = (data) => {

    console.log(data);
    dispatch(TheCard(data));
    nav(("/UpdateCard/" + true));
  }
  const Delet = (Id) => {
    let card = CardsArr.find(x => x.Id == Id)
    DeletCard(card).then(alert("כרטיס זה נמחק מרשימת הכרטיסים לבריכה זו"));
  }

  const AddToCart = (Card) => {
    dispatch(addToCart(Card));

  }


  return (
    <> 
     {currentUser.IdRole==2?
      <><h1>מחירון</h1>
      <input type="button" value="הוספת כרטיסיה" onClick={() => nav("/AddDetailsCard/true")} />
      </>
      
    : 
       <> <h1>המחירון שלנו  </h1>
          <h3>לקניה ביחידים אנא בחר כמות</h3><br />
         <input type="number" id="amount" className="input1" style={{ color: "black" }} />
         <input type="button" value="הוספה לסל" className="button4" onClick={() => AddToCart({ Price: currentPool.Price * document.getElementById("amount").value, EntersAmount: document.getElementById("amount").value })} ></input>
       </>}

    
        <br/><br/>
          {CardsArr.map(Card => <>{Card.EntersAmount != '1' ? <div className="Card"> <br/><br/><br/><br/>     כניסות: {Card.EntersAmount}<br></br> מחיר: {Card.Price} <br />
            {currentUser.IdRole == 2 ?
              <>
                <input type="button" value="עדכן" className="Mbutton1" onClick={() => update(Card.Id)} />
                <input type="button" value="מחק" className="Mbutton1" onClick={() => Delet(Card.Id)} />
              </>
              :
              <img src="../Pic/add-to-cart.png" alt="" className="AddPic"  onClick={() => { AddToCart(Card) }}/>
            }

          </div> : null}</>)
        }
    </>
  )
}
export default BuyTickets;