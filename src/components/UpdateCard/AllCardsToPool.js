import {useEffect} from "react";
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import {getAllCardByIdPool}from "../../store/Actions/Card";

export default function AllCardsToPool(){

  const {currentPool,CardsArr} = useSelector(state => ({
    currentPool: state.currentPool,
    CardsArr:state.CardsArr
  }), shallowEqual);
  console.log(CardsArr);
  const nav=useNavigate();

  const dispatch=useDispatch();

  useEffect(() => {
    
    dispatch(getAllCardByIdPool(currentPool.Id));
}, []); 

const update=(Id)=>{
  alert(Id);
  //dispatch(getById(Id));
  //nav(("/UpdateUser/"+true));
}
  return(
    <>
    <h1>כל הכרטיסים</h1>
    <ul>
        {
            CardsArr.map(CardsArr=><><br/> <li className="li" key={CardsArr.Id}><h3>id: {CardsArr.Id}</h3><br/> מחיר:{CardsArr.Price}<br/> כמות בניסות:{CardsArr.EntersAmount}<br/>
            <input type="button" value="עדכון" onClick={()=>update(CardsArr.Id)}/> <input type="button" value="מחיקה" onClick={()=>alert(CardsArr.Id)}/></li></> )
        }
    </ul>
    <input type="button" value="הוספת כרטיס" onClick={()=>nav("/AddDetailsCard/true")}/>
    </>
  )
}