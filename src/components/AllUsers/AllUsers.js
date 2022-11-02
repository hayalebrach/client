import {useEffect} from "react";
import {getAllHistoryOfUser} from "../../store/Actions/Users"
import {getAllUsersByIdPool} from "../../store/Actions/Pools"
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import "./AllUsers.css"
export default function AllUsers(){

  const {currentPool,UsersPool,HistoryUser} = useSelector(state => ({
    currentPool: state.currentPool,
    UsersPool:state.UsersPool,
    HistoryUser:state.HistoryUser
  }), shallowEqual);

  const dispatch=useDispatch();
  const nav=useNavigate();
  
  useEffect(() => {
    dispatch(getAllUsersByIdPool(currentPool.Id));
}, []);

const getHistory=(IdUser,IdPool)=>{
    dispatch(getAllHistoryOfUser(IdPool,IdUser));
    console.log(HistoryUser);
   nav("/ManagerNavBar/AllUsers/TheUser");
}

  return(
    <>
    <h1>משתמשים</h1>
    <ul>
        {
           UsersPool.map(UsersPool=><><br/> <li className="li" key={UsersPool.Id}><br/> :שם{UsersPool.NameUser}<br/>  :מייל{UsersPool.EmailUser} <br/>
           <input type="button" value="לפרטי המשתמש" onClick={()=>getHistory(UsersPool.IdUser,UsersPool.IdPool)}/></li></> )
        }
    </ul>
      
    </>
  )
}