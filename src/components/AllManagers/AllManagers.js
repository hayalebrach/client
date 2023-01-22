
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
            Managers.map(Manager=><> <div className="classicDiv" > {Manager.Name}<text> :שם</text> <br/> <br/>  {Manager.Email} <text> :מייל </text> </div>  </>)
       :null}
    </>
  )
} 





