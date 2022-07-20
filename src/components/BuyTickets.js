import {useEffect, useState} from "react"

export default function BuyTickets(){
  const [Cards,SetCards]=useState([]);

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

  return(
    <>
    <h1>כרטיסיות</h1>
    <ul>
        {
        Cards.map(Card=><> <br/> <li className="li"> סוג כרטיסיה: {Card.type}<br></br> מחיר: {Card.price}</li> </>)
        }
    </ul>
    
    </>
  )
}