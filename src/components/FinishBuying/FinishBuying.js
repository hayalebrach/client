
import React ,{ useState } from "react";
import { useNavigate } from "react-router";
import Input from "../Input";
import "./FinishBuying.css"
import { useRef } from "react";
import { connect } from "react-redux";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";

const schema = yup.object({
   
    password: yup.number(),
    address: yup.string(),
    phone: yup.number().positive().integer().required().max(10),
    

}).required();
const FinishBuying=()=>{
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});
const onSubmit = data => console.log(data);
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

    <Input register={register} errors={errors} className="input" name="userName" lablName="שם פרטי" />
    <Input register={register} errors={errors}  className="input"name="address" lablName="כתובת" />
    <Input register={register} errors={errors}  className="input"name="phone" lablName="פלאפון" />

    <h3 className="x">בחר שיטת תשלום:</h3><br/>
    <Input register={register} errors={errors} type="radio" name="payment" lablName="Paypal" onClick={PayPal} />
    <Input register={register} errors={errors} type="radio" name="payment" lablName="אשראי" onClick={CreditCard} />

    {showPaypal?
    <div className="paypal">
        <h3 id="paypal">:מספר החשבון</h3><br/>
        <input type="text" className="input" ></input>
    </div>:null}

   {showCredit? <div className="creditCard">
        <h3 id="creditCard1" >:מספר כרטיס</h3>
        <input type="text" className="input" id="tinnyInput11"></input>
        <h3 id="creditCard2" >:תוקף</h3>
        <input type="date" className="input" id="tinnyInput12"></input>
        <h3 id="creditCard3" >CVV:</h3>
        <input type="number" className="input" id="tinnyInput13"></input>
        
    </div>:null}
    
    <input type="button" className="button" id="keepBuying" value="המשך לקנות" onClick={keepBuying} /><br/>
    <input type="button" value="!שלם"  className="button" id="pay" onClick={()=>{setShowDiv(true);setShowCredit(false);setShowPaypal(false); document.getElementById("div").style.visibility="hidden"}}></input>
    </div>

    </>)

}

export default FinishBuying;