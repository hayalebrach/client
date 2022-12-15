import{ React,useEffect}  from "react";
import { useParams,useNavigate } from "react-router";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {updateCard,getAllCardByIdPool} from "../../store/Actions/Card";
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
                dispatch(updateCard(cardSchema));
               dispatch(getAllCardByIdPool(cardSchema.IdPool));
                console.log(CardsArr);
                nav("/ManagerNavBar/AllCardsToPool");
            }
return (<>
    <h1>עדכון</h1>
    <form>
        <div className="div1">

        <label >מחיר</label><br/>
        <input type="number" className="input"  name="Price" placeholder={currentCard.Price} variant="standard" onChange={change} defaultValue={currentCard.Price} disabled={f.flag=="false"}/>
        
        <label >מספר כניסות</label><br/>
        <input type="number" className="input" name="EntersAmount" placeholder={currentCard.EntersAmount} variant="standard" onChange={change} defaultValue={currentCard.EntersAmount} disabled={f.flag=="false"}/>
        
     
        <input type="button" className="button" value="עדכון"onClick={()=>Send()}/></div>
    </form>
    </>
); 
}