
import {useEffect, useState} from "react"

export default  function Cart(){
    const [cart,SetCart]=useState([]);

  useEffect(()=>{
      const fakeCart=
      [
        {id:"1111",name:"בריכה1",amount:"2",price:50},
        {id:"2222",name:"בריכה2",amount:"5",price:100},
        {id:"3333",name:"בריכה3",amount:"7",price:200},
        {id:"4444",name:"בריכה4",amount:"1",price:30}
      ];

      SetCart(fakeCart);

  },[])

  return(
    <>
    <h1>Cart</h1>
    <ul>
        {
            cart.map(cart=> <li>{cart.id} {cart.name} {cart.amount} {cart.price}</li> )
        }
    </ul>
    
    </>
  )
} 





