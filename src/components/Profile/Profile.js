import { useNavigate } from "react-router"
import "./Profile.css"
export default  function Profile(){
    let nav=useNavigate();

    const HistoryFunc=()=>{
        nav("./history");
    }
    return(<>
    <div className="Mdiv">
    
    <img src="../Pic/userr.png" className="img3"/>
    <h2>ליאל מימון</h2><br/>
    <text className="z">מחובר מ: 22.3.2019 <br/><br/>
    liel@gmail.com   :מייל <br/><br/>
    כתובת: התמר 13 ראשון לציון <br/><br/>
    אמצעי תשלום: *****3311 <br/>
    <b onClick={HistoryFunc}>להסטוריית ההזמנות</b>
    </text>
    

    <input type="button" className="button3" value="<-התנתק" onClick={()=>nav("./GuessNavBar")}></input>




    </div>

    </>)
    
}