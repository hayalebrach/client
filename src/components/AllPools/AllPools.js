
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
//import { savePool } from "../../store/Actions/Pools"
import "./AllPools.css";

export default  function AllPools(){
    const Pools=useSelector(state =>state.Pools);
    let currentPool=useSelector(state =>state.currentPool);
    const dispatch = useDispatch();
    let nav=useNavigate();

    const Func=(data)=>{
     // dispatch(savePool(data));
      console.log("IM BACKK!!");
      nav("/poolWeb");
      console.log(currentPool);
    }

  return(
    <>
    <br/>
    <br/>
    <h1>בריכות שחייה</h1>
    <ul>
        {
            
           // Pools.map(pool=> <><div  className="pool"><div>  <img src={`Pic/${pool.pic}.jpg`} className="img"/>  </div> <br/><b>{pool.name}</b><br/>{pool.dis}<br/> <input type="button" className="button1" value="לפרטים" onClick={()=>Func(pool)}></input></div></> )
        }
    </ul>
    
    </>
  )
} 




