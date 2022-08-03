
import {useEffect, useState} from "react"
import "./AllPools.css";

export default  function AllPools(){
    const [Pools,SetPools]=useState([]);

  useEffect(()=>{
      let fakePools=
      [
          {id:"1111",name:"בריכת האגם",phone:"123456789",address:"צפריר  אור יהודה",pic:'istockphoto-1148844017-1024x1024',dis:"גליל מערבי, אגם מונפורטבריכת שחייה ת"},
          {id:"2222",name:"פארק המים שפעים",phone:"123456789",address:"רמלה בן גוריון 15",pic:"istockphoto-1319918284-1024x1024",dis:"תל אביב והמרכז, שפיים פארק המים"},
          {id:"3333",name:"חמי הגעש",phone:"123456789",address:"התמר 13 צפת",pic:"istockphoto-1310081147-1024x1024",dis:"בריכות שחייה, מגלשות מים,, ג'קוזי, סאונה"},
          {id:"4444",name:"בריכת החוף",phone:"123456789",address:"השקד 30 לוד",pic:"istockphoto-1311457374-1024x1024",dis:"חיפה והכרמל, נשרמרכז בילוי, ספורט ופנאי ה,"},
          {id:"5555",name:"בריכת יפה נוף",phone:"123456789",address:"יעד 30 לוד",pic:"istockphoto-1325939237-1024x1024",dis:"חיפה והכרמל, נשרמרכז בילוי, ספורט ופנאי  ה,"},
          {id:"6666",name:"בריכת המים",phone:"123456789",address:"השומר 30 אילת",pic:"swimming-pool-g8bee2e575_1920",dis:"חיפה והכרמל, נשרמרכז בילוי, ספורט ופנאי  ה,"}
      ];

      SetPools(fakePools);

  },[])
  

  return(
    <>
    <br/>
    <br/>
    <h1>בריכות שחייה</h1>
    <ul>
        {
            
            Pools.map(pool=> <><div  className="pool"><div>  <img src={`Pic/${pool.pic}.jpg`} className="img"/>  </div> <br/><b>{pool.name}</b><br/>{pool.dis}<br/> <input type="button" value="לפרטים" onClick={()=>{alert("Lieli")}}></input></div></> )
        }
    </ul>
    
    </>
  )
} 




