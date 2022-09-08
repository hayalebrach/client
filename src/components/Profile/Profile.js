import { useNavigate } from "react-router"
import {useSelector} from "react-redux"
import "./Profile.css"
export default  function Profile(){
  
    let nav=useNavigate();
    const HistoryFunc=()=>{
        nav("./history");
    }
    const currentUser=useSelector(state=>state.currentUser);
    return(<>
    <div className="Mdiv">
    
    <img src="../Pic/userr.png" className="img3"/>
    <h2>{currentUser.Name}</h2><br/>
    <text className="z">מחובר מ: {currentUser.LastEntery} <br/><br/>
    {currentUser.Email}:מייל <br/><br/>
    אמצעי תשלום: *****3311 <br/>
    <b onClick={HistoryFunc}>להסטוריית ההזמנות</b>
    </text>
    <input type="button" className="button3" value="<-התנתק" onClick={()=>nav("./GuessNavBar")}disa></input>
    </div>

    </>)
    
}