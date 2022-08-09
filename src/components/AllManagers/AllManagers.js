
import {useEffect, useState} from "react"
//import {useSelector} from 'react-redux';


export default  function AllManagers(){
  //const Managers = useSelector((state) => state.fakeManagers);
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
            Managers.map(Managers=><><br/> <li className="li"><text>שם:</text> {Managers.name} <br/> <text> מספר מזהה:  </text> <br/>  {Managers.email} <text> :מייל </text> </li>  </>)
        }
    </ul>
        
    </>
  )
} 





