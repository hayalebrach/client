
import {useEffect, useState} from "react"

export default  function AllManagers(){
    const [Managers,SetManagers]=useState([]);

  useEffect(()=>{
      const fakeManagers=
      [
        {id:"1111",name:"ליאל",email:"lieli@gmail.com",password:1212},
        {id:"2222",name:"חיוש",email:"chayush@gmail.com",password:2212},
        {id:"3333",name:"סיווני",email:"sivani@gmail.com",password:121572},
        {id:"4444",name:"ספירוש",email:"sapirush@gmail.com",password:555545}
      ];

      SetManagers(fakeManagers);

  },[])

  return(
    <>
     <br/>
     
   
    <h1>מפרסמים</h1><br/>
    <br/>
    
    <ul>
        {
            Managers.map(manager=><><br/> <li className="li"><text>שם:</text> {manager.name} <br/> <text> מספר מזהה:  </text> {manager.id} <br/>  {manager.email} <text> :מייל </text> </li>  </>)
        }
    </ul>
        
    </>
  )
} 





