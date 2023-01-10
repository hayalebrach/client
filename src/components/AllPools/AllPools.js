
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { savePool ,GetAllCoursesByPool} from "../../store/Actions/Pools"
import "./AllPools.css";

export default  function AllPools(){
  const dispatch = useDispatch();

    const Pools=useSelector(state =>state.poolsArr);
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
    
        {
           Pools.map(pool=> <><div  className="pool"><div>  <img src={`Pic/${pool.Pic}`} className="img"/>  </div> <br/><b className="name">{pool.Name}</b><br/><text>{pool.Adress} </text> <img src={`Pic/map.png`} className="imgLocation"/> <br/><text> מחיר: {pool.Price}</text><br/><input type="button" className="detailsButton" value="לפרטים" onClick={()=>Func(pool)}></input></div></> )

        }
    

    
    
    </>
  )
} 




