import { useNavigate } from "react-router"
import "./BuyingForm.css"
export default function BuyingForm(){

    let nav=useNavigate();
    return(<>
    
    <div className="buyingDiv">
        <h1>סיכום הזמנה</h1>
        <h3>כרטיסיית 5 כניסות</h3>
        <h3>מחיר:120 ש"ח</h3>
        
        <h3><b>לתשלום: 120 ש"ח</b></h3>
        <input type="button" value="לתשלום" onClick={()=>nav("./finishBuying")}></input>
    </div>
   
    
    </>

    )

}