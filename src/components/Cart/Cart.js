
import {useEffect, useState} from "react"
import { useNavigate } from "react-router";
import "./Cart.css";
export default  function Cart(){
  let nav=useNavigate();
    const [cart,SetCart]=useState([]);

  useEffect(()=>{
      const fakeCart=
      [
        {date:"12/3/2019",name:"שפעים",amount:"2",price:50},
        {date:"01/07/2020",name:"על החול",amount:"5",price:100},
        {date:"27/09/2021",name:"רעננה",amount:"7",price:200},
        {date:"20/03/2022",name:"עמוקים",amount:"1",price:30}
      ];

      SetCart(fakeCart);

  },[])

  return(
    <>
    <h1>Cart</h1>
    
        {
            cart.map(cart=><div className="div1"> <b>שם הבריכה: </b>{cart.name}<br/> כמות כרטיסים: {cart.amount} <br/> :תאריך קניה {cart.date} <br/> סה"כ שולם:{cart.price}<br/> <input type="button" className="buttonn" value="לאתר הבריכה" onClick={()=>nav("./UserNavBar")}/></div> )
        }
   
    
    </>
  )
} 





