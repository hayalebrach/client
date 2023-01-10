
import {useEffect, useState} from "react"
import {getAllManagers} from "../../store/Actions/Manager";

export default  function AllManagers(){
  const[Managers,SetM]=useState();
  useEffect(() => {
    getAllManagers().then(x=>Func(x.data));
}, [Managers]);
const Func=(data)=>{
  SetM(data);
  console.log(Managers);
}
  return(
    <>
     <br/>
     
   
    <h1>מפרסמים</h1>
        {Managers?
            Managers.map(Manager=><><br/> <div className="div1"><text>שם:</text> {Manager.Name} <br/> <text> מספר מזהה:  </text> <br/>  {Manager.Email} <text> :מייל </text> </div>  </>)
       :null}
    </>
  )
} 





