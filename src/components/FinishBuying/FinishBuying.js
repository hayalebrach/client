
import React ,{ useState } from "react";
import { useNavigate } from "react-router";
import "./FinishBuying.css"

const FinishBuying=()=>{
    const [showPaypal,setShowPaypal]=useState(false);
    const [showCredit,setShowCredit]=useState(false);
    const [showDiv,setShowDiv]=useState(false);
 
    let nav=useNavigate();

    const keepBuying=()=>{
        nav("/home");

    }

    const PayPal=()=>{
    setShowCredit(false);
    setShowPaypal(true);


    
    }
    const CreditCard=()=>{
        setShowCredit(true);
        setShowPaypal(false);
        document.getElementById("payments").style.position="relative";
        document.getElementById("payments").style.top="-74px";
        document.getElementById("keepBuying").style.top="-165px";
        document.getElementById("pay").style.top="-167px";

    }
    return(<>
    {showDiv?
    <div >
        <h1>!הזמנה 13342 בוצעה בהצלחה</h1>
        <h3>פרטי ההזמנה ישלחו אליך למייל.</h3>
        <h3>נשמח לראותך בקרוב בשטח הבריכה :)</h3>
    </div>:null}

    <div className="div" id="div">

    <h3 className="x">:שם</h3>
    <input type="Text" name="UserName" className="input" />
    <h3 className="x">:כתובת</h3>
    <input type="Text" name="Address" className="input" />
    <h3 className="x">:פלאפון</h3>
    <input type="Text" name="Phone" className="input"/>
    <h3 className="x">בחר שיטת תשלום:</h3><br/>


    <div className="payments" id="payments">
    <text >PayPal</text><input type="radio" name="x" onClick={PayPal}/><br/>

    {showPaypal?
    <div className="paypal">
        <h3 id="paypal">:מספר החשבון</h3><br/>
        <input type="text" className="input" ></input>
    </div>:null}

    <text >אשראי</text><input type="radio" name="x" onClick={CreditCard}/><br/>

   {showCredit? <div className="creditCard">
        <h3 id="creditCard1" >:מספר כרטיס</h3>
        <input type="text" className="input" id="tinnyInput11"></input>
        <h3 id="creditCard2" >:תוקף</h3>
        <input type="date" className="input" id="tinnyInput12"></input>
        <h3 id="creditCard3" >CVV:</h3>
        <input type="number" className="input" id="tinnyInput13"></input>
        
    </div>:null}
    </div>
    <input type="button" className="button" id="keepBuying" value="המשך לקנות" onClick={keepBuying} /><br/>
    <input type="button" value="!שלם"  className="button" id="pay" onClick={()=>{setShowDiv(true);setShowCredit(false);setShowPaypal(false); document.getElementById("div").style.visibility="hidden"}}></input>
    </div>

    </>)

}

export default FinishBuying;