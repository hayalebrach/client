import React,{ useEffect,useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {GetListOfDateAndPool,PostEntCust} from '../../store/Actions/Time';
import {getCardsToCustomer,updateAmountGet} from "../../store/Actions/Card";
import { date } from "yup/lib/locale";
const schema = yup.object({
     NumPeople: yup.number().positive().integer().required(),
     IdPool: yup.number(),
     EnterDate: yup.date().required(),
     IdCustomerToPool: yup.number(),
     StartHour: yup.string().required(),
     EndHour:yup.string().required(),
     Status:yup.bool()
  }).required();

export const SavePlace=()=> { 
    
    
    const { currentPool, currentSchedule,currentUser} = useSelector(state => ({
    currentPool: state.currentPool,
    currentSchedule: state.currentSchedule,
    currentUser:state.currentUser
}), shallowEqual);



    const [history,SetHistory]=useState([]);   
    const [number,Setnum]=useState();
    const [flag,SetFlag]=useState();
    const[IdCTP,SetId]=useState();
    //בדיקת מספר האנשים בבריכה באותו היום
    const [ChekTheNumPeople,SetCTNP]=useState([]);

    //תאריך רצוי   

    // const [yaer,SetYare]=useState();
    // const [month,SetMonth]=useState();
    let day=0,month=0,yaer=0;
    const [date,SetDate]=useState();
    //console.log(date);
    useEffect(()=>{
        getCardsToCustomer(currentUser.Id).then(x=>SetHistory(x.data));
        GetListOfDateAndPool(currentPool.Id).then(x=>SetCTNP(x.data)); 

 },[history,ChekTheNumPeople])




let WeekDay=1;//היום שבו התאריך מתקים -בשביל לבדוק  היום של שתאריך תואם את היום בלוח זמנים




const handleChangeDate = (event) => {
    const a=event.target.value;
    SetDate(a);
 ChekeTheDate(new Date(a));
};
//בבדיקה שהיום של הלוח שמנים הנבחר תואם את היום של התאריך
const ChekeTheDate=(EnterDate)=>{
    let a=EnterDate.getDay();
    
    WeekDay +=a;//זה היום בשבוע שבו התאריך מתקים
 if(WeekDay!=currentSchedule?.IdDays)
    alert("התאריך הנבחר אינו תואם את בחירת מערכת השעות");
}

  
const handleChangeNumPeople = (event) => {
    console.log(event.target.value);
    let num3=parseInt(event.target.value);
    Setnum(num3);
    FlagTrue();
   
 ChekNumPeople(num3);
};

//בדיקה אם מספר אנשים זה יכול להיכנס בבריכה
const ChekNumPeople=(NumPeople)=>{
    if(date!=null)
{
 let num=0;
 let i;
 let a,b,c;
 for(i=0;i<ChekTheNumPeople.length;i++)
 {

      a=new Date(ChekTheNumPeople[i].EnterDate).getDate();
      b=new Date(ChekTheNumPeople[i].EnterDate).getMonth();
      c=new Date(ChekTheNumPeople[i].EnterDate).getFullYear();
      day=new Date(date).getDate();
      month=new Date(date).getMonth();
      yaer=new Date(date).getFullYear();
     if(c==yaer)
     {
        if(b==month)
        {
         
            if(a==day){
                console.log(ChekTheNumPeople[i].NumPeople);
                num+=ChekTheNumPeople[i].NumPeople;
            }
        }
     }
 }    
  num+=NumPeople;
  console.log(num);
 if(currentPool.Amount<num)
    alert("אנא נסו יום אחר בבריכה זו- מספר האנשים ביום זה חורג מהמותר בבריכה ");
 console.log(currentPool.Amount);   
}
else
alert("נא למלא קודם פרטי תאריך");
}


const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });


const onSubmit = (data) => {
    data.Status=true;
    data.IdCustomerToPool=IdCTP;
    data.IdPool=currentPool.Id;
    console.log(data);
    PostEntCust(data).then(console.log("תודה רבה לך ה' שהצלחתי")); 

}
const FlagTrue=()=>{
    SetFlag(true);
}
const PayWithCard=(AmountLeft,AmountGet,Id)=>{
    SetId(Id);
    let num2=(AmountGet+number);
    let x=parseInt(num2);  
    if(x>parseInt(AmountLeft))
    alert(" הכנס מספר אנשים הקטן מ "+number);
    else{
        updateAmountGet(Id,x);
        SetFlag(false);
    }
}

  return(<>
     <h1>SavePlace</h1> 
     <form onSubmit={handleSubmit(onSubmit)}>
       <label>שם הבריכה</label><br/>
      <input type="text"  readOnly defaultValue={currentPool.Name}/><br/>
      <label>הכנס תאריך </label><br/>
      <input {...register("EnterDate")} type="date"  onChange={handleChangeDate}/><br/>
      <p>{errors.EnterDate?.message}</p>
      <label>שעת התחלה</label><br/>
      <input {...register("StartHour")} type="text" readOnly disabled={false} defaultValue={currentSchedule.StartHour}/><br/>
      <label>שעת סיום</label><br/>
      <input {...register("EndHour")} type="text" readOnly disabled={false} defaultValue={currentSchedule.EndHour}/><br/>
       <label>הכנס מספר אנשים</label><br/>
      <input {...register("NumPeople")} type="number" onChange={handleChangeNumPeople}/><br/>
      <p>{errors.NumPeople?.message}</p>
     {flag==false?<input type="submit" value="סיום"/>:null}
    </form>
    {flag==true?<h4>לתשלום באמצעות כרטיסי רכישה</h4>:null}
      {flag==true?     
        history.map(cart=>(cart.IdPool==currentPool.Id?<div className="div1"> כמות כרטיסים: {cart.AmountLeft} <br/>  כרטיסים שמומשו: {cart.AmountGet} <br/>:תאריך קניה {cart.DateBuy} <br/> סה"כ שולם:{cart.TotalPrice}<br/><input value="לתשלום" type="button" onClick={()=>PayWithCard(cart.AmountLeft,cart.AmountGet,cart.Id)}/></div>:alert("על מנת לשריין מקום יש לבדוק שיש באפשרותך לשלם באמצעות כרטיסי הבריכה!!!")) )
        :null}    
  
  </>)
    

}