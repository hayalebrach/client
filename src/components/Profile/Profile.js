import { useNavigate } from "react-router"
import {useDispatch, useSelector} from "react-redux"
import {GetCoursesToUser} from "../../store/Actions/Cours"
import "./Profile.css"
import { Exit } from "../../store/Actions/Users";
export default  function Profile(){
  
    let nav=useNavigate();
    const dispatch=useDispatch();
    const currentUser=useSelector(state=>state.currentUser);

    const HistoryFunc=()=>{
        nav("./history");
    }
    const MyCourses=()=>{
        dispatch(GetCoursesToUser(currentUser.Id));
        nav("./CourseToUser");
    }

    const LogOut=()=>{
        dispatch(Exit());
        nav("./GuessNavBar")
    }
    
    return(<>
    <div className="Mdiv">
    
    <img src="../Pic/userr.png" className="img3"/>
    <h2>{currentUser.Name}</h2><br/>
    <text className="z">מחובר מ: {currentUser.LastEntery} <br/><br/>
    {currentUser.Email}:מייל <br/><br/>
    אמצעי תשלום: *****3311 <br/>
    <b onClick={HistoryFunc}>להסטוריית ההזמנות</b><br/>
    <b onClick={MyCourses}>לקורסים שלי</b>

    </text>
    <input type="button" className="Mbutton" value="<-התנתק" onClick={LogOut}disa></input>
    </div>

    </>)
    
}