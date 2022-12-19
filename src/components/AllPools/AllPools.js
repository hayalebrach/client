
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { savePool ,GetAllCoursesByPool} from "../../store/Actions/Pools"
import "./AllPools.css";

export default  function AllPools(){
  const dispatch = useDispatch();

    const poolsArr=useSelector(state =>state.poolsArr);
    let currentPool=useSelector(state =>state.currentPool);
    // const {currentPool,courses_arr,currentCours }= useSelector(state => ({
    //   currentPool: state.currentPool,
    //   courses_arr:state.courses_arr,
    //   currentCours:state.currentCours,
    // }), shallowEqual);
    let nav=useNavigate();
    const Func=(pool)=>{
      dispatch(savePool(pool));
      nav("/poolWeb");
    }

  return(
    <>
    <br/>
    <br/>
    
    <h1>בריכות שחייה</h1>
    <ul>
        {
           poolsArr.map(Pools=> <> <div className="pool" ><div>  <img src={"Pic/istockphoto-1311457374-1024x1024.jpg"} className="img"/>  </div> 
           <br/><b>{Pools.Name}</b>
           <br/>{Pools.Adress}<br/> 
           <br/>{Pools.Price}<input type="button" className="button1" value="לפרטים" onClick={()=>Func(Pools)}></input>
             </div></> )
        }
    </ul>
    
    </>
  )
} 




