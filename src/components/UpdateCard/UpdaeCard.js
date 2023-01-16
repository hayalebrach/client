import{ React,useEffect}  from "react";
import { useParams,useNavigate } from "react-router";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {updateCard,getAllCardByIdPool} from "../../store/Actions/Card";
import "../Login/Login.css";
import "./AllCardsToPool.css";
export default function UpdateCard(){
    const dispatch = useDispatch();
    let f = useParams();
    const nav=useNavigate();
    useEffect(() => {
        f=f.flag;
    }, []) ;

        const {currentCard,CardsArr} = useSelector(state => ({
            currentCard: state.currentCard,
            CardsArr:state.CardsArr
          }), shallowEqual);
          
     const cardSchema = {
        Id:currentCard.Id,
        IdPool:currentCard.IdPool,
        Price:currentCard.Price,
        EntersAmount:currentCard.EntersAmount,
        Status:currentCard.Status
    }
  
              const change = (e) => {
              const inputName = e.target.name;
              const inputValue = e.target.value;
              cardSchema[inputName] = inputValue;
              console.log(cardSchema[inputName]);
            }
            const Send=()=>{
                console.log(cardSchema);
                updateCard(cardSchema).then();
                dispatch(getAllCardByIdPool(cardSchema.IdPool));
                console.log(CardsArr);
                nav("/ManagerNavBar/AllCardsToPool");
            }
return (<> 
     <div className="formDiv">
    <h1>עדכון כרטיס</h1>
    <form>
        <label>מחיר</label><br/><br/>
        <input type="number" className="updateCard"  name="Price" placeholder={currentCard.Price} variant="standard" onChange={change} defaultValue={currentCard.Price} disabled={f.flag=="false"}/>
        <br/>
        <label>מספר כניסות</label><br/>   <br/>
        <input type="number" className="updateCard" name="EntersAmount" placeholder={currentCard.EntersAmount} variant="standard" onChange={change} defaultValue={currentCard.EntersAmount} disabled={f.flag=="false"}/>
        <br/>
        <input type="button" className="buttonUpdateCard"  value="עדכון" onClick={()=>Send()}/>
    </form>
    </div> </>
); 
}