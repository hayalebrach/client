import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router"
import { useSearchParams } from "react-router-dom";
import { Purchasing } from "../../store/Actions/Cart";
import "./BuyingForm.css"
const BuyingForm=()=>{

    let nav=useNavigate();
    let cart=useSelector(state=>state.Cart);
    let currentUser=useSelector(state=>state.currentUser);
    let x={IdPackage:null,IdUser:null,AmountGet:null,AmountLeft:null,TotalPrice:null,DateBuy:null};
    const dispatch=useDispatch();

    const Buy=()=>{
        for(let i=0;i<cart.length;i++){
            x.IdPackage=cart[i].Id;
            x.IdUser=currentUser.Id;
            x.AmountGet=cart[i].EntersAmount;
            x.AmountLeft=cart[i].EntersAmount;
            x.TotalPrice=cart[i].Price;
            x.DateBuy=new Date();

            dispatch(Purchasing(x));

        }
        alert("finish1");
    }
    return(<>
    
    <div >
        <h1>סיכום הזמנה</h1>
        {
            cart.map(cart=><div className="Card"> <b>שם הבריכה: </b>{cart.PoolName}<br/> כמות כרטיסים: {cart.EntersAmount} <br/> :תאריך קניה {cart.date} <br/>:תוקף {cart.validity}<br/> סה"כ תשלום:{cart.Price*cart.EntersAmount}<br/>
            <img src="/Pic/swimming-pool.png" className="cardImg"></img><br/></div> )
            
        }

        <input type="button" className="buttonkeepBuy"  value="המשך לקנות" onClick={()=>nav("./AllPools")} /><br/>
        <input type="button" value="!שלם"  className="buttonPay" onClick={()=>Buy()}></input>


        
    </div>
   
    
    </>

    )

}
export default BuyingForm;