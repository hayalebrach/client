import {useEffect, useState} from "react"
import { useNavigate } from "react-router";
import "./BuyTickets.css"
export default function BuyTickets(){
  const [Cards,SetCards]=useState([]);

  let nav=useNavigate();
  useEffect(()=>{
      const fakeCards=
      [
          {type:"5 כניסות",price:120},
          {type:"10 כניסות",price:170},
          {type:"20 כניסות",price:200},
          {type:"50 כניסות",price:400}
      ];

      SetCards(fakeCards);

  },[])

  const Buy=()=>{
    nav("/buyingForm");


  }

  return(
    <>
    <h1>כרטיסיות</h1>
    <h3>לקניה ביחידים אנא בחר כמות</h3>
    

    <input type="button" value="לרכישה" onClick={Buy}></input>
    <input type="button" value="הוספה לסל"  onClick={()=>alert("התווסף בהצלחה!")}></input>
    <input type="number"></input>
    <ul>
        {
        Cards.map(Card=><> <br/> <li className="li"> סוג כרטיסיה: {Card.type}<br></br> מחיר: {Card.price}</li><input type="button" value="לרכישה"  onClick={Buy}></input> <br/><input type="button" value="הוספה לסל" onClick={()=>alert("התווסף בהצלחה!")}></input></>)
        }
    </ul>
    
    </>
  )
}