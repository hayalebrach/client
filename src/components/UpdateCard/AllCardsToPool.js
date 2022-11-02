import {useEffect} from "react";
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import {getAllCardByIdPool,getById,DeletCard}from "../../store/Actions/Card";

export default function AllCardsToPool(){

  const {currentPool,CardsArr,currentCard} = useSelector(state => ({
    currentPool: state.currentPool,
    CardsArr:state.CardsArr,
    currentCard:state.currentCard
  }), shallowEqual);

  useEffect(() => {
    dispatch(getAllCardByIdPool(currentPool.Id));
}, []);

  const nav=useNavigate();

  const dispatch=useDispatch();



const update=(Id)=>{
  dispatch(getById(Id));
  nav(("/UpdateCard/"+true));
}
const Delet=(Id)=>{
  console.log(Id);
  console.log("שלום לכם");
   dispatch(getById(Id));
   console.log(currentCard);
   dispatch(DeletCard(currentCard));
}
  return(
    <>
    <h1>כל הכרטיסים</h1>
    <ul>
        {
            CardsArr.map(CardsArr=><><br/> <li className="li" key={CardsArr.Id}><h3>id: {CardsArr.Id}</h3><br/> מחיר:{CardsArr.Price}<br/> כמות בניסות:{CardsArr.EntersAmount}<br/>
            <input type="button" value="עדכון" onClick={()=>update(CardsArr.Id)}/> <input type="button" value="מחיקה" onClick={()=>Delet(CardsArr.Id)}/></li></> )
        }
    </ul>
    <input type="button" value="הוספת כרטיס" onClick={()=>nav("/AddDetailsCard/true")}/>
    </>
  )
}