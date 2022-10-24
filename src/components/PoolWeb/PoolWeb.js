

import { useSelector } from "react-redux";
import PoolNavBar from "../PoolNavBar"

export default  function PoolWeb(){
  
    const currentPool=useSelector(state =>state.currentPool);
    
    return(<>
    <h1>{currentPool.Name}</h1>
    <PoolNavBar/>
    </>)
    
  
} 





