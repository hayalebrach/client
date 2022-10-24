import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {getAllCardByIdPool} from "../../store/Actions/Card"
import "./BuyTickets.css"
export default function BuyTickets(){
  const nav=useNavigate();
  const dispatch=useDispatch();
  let currentPool=useSelector(state =>state.currentPool);

  useEffect(()=>{
    dispatch((getAllCardByIdPool(currentPool.Id)));
    
   },[]);

   const Cards=useSelector(state=>state.CardsArr);

  

  return(
    <>
    <h1>כרטיסיות</h1>
    <h3>לקניה ביחידים אנא בחר כמות</h3>
    

    
    <input type="button" value="הוספה לסל"  onClick={()=>alert("התווסף בהצלחה!")}></input>
    <input type="number"></input>
    <br/>
    <br/>
    <ul>
        {
        Cards.map(Card=><>  <div className="div1"> סוג כרטיסיה: {Card.EntersAmount}<br></br> מחיר: {Card.Price} <br/><input type="button" className="button1" value="הוספה לסל" onClick={()=>alert("התווסף בהצלחה!")}></input></div></>)
        }
    </ul>
    
    </>
  )
}