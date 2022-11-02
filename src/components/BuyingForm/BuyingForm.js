import { useSelector } from "react-redux";
import { useNavigate } from "react-router"
import { useSearchParams } from "react-router-dom";
import "./BuyingForm.css"
const BuyingForm=()=>{

    let nav=useNavigate();
    let cart=useSelector(state=>state.Cart);
    return(<>
    
    <div >
        <h1>סיכום הזמנה</h1>
        {
            cart.map(cart=><div className="div1"> <b>שם הבריכה: </b>{cart.PoolName}<br/> כמות כרטיסים: {cart.CardsAmount} <br/> :תאריך קניה {cart.date} <br/>:תוקף {cart.validity}<br/> סה"כ תשלום:{cart.Pay}<br/></div> )
        }
        
        
        <input type="button" value="לתשלום" onClick={()=>nav("./finishBuying")}></input>
    </div>
   
    
    </>

    )

}
export default BuyingForm;