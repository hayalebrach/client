
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { savePool ,GetAllCoursesByPool} from "../../store/Actions/Pools"
import "./AllPools.css";

export default  function AllPools(){
  const dispatch = useDispatch();

    const Pools=useSelector(state =>state.poolsArr);
    let currentPool=useSelector(state =>state.currentPool);
    
    let nav=useNavigate();
    const Func=(pool)=>{
      dispatch(savePool(pool));
      
      console.log("IM BACKK!!");
      nav("/poolWeb");
      console.log(currentPool);
    }

  return(
    <>
    <br/>
    <br/>
    
    <h1>בריכות שחייה</h1>
    
        {
           Pools.map(pool=> <><div  className="pool"><div>  <img src={`Pic/${pool.Pic}`} className="img"/>  </div> <br/><b>{pool.Name}</b><br/>{pool.Adress}<br/> <br/>{pool.Price}<input type="button" className="button1" value="לפרטים" onClick={()=>Func(pool)}></input></div></> )
        }
    

    
    
    </>
  )
} 




