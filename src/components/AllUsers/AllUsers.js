import {useEffect} from "react";
import {getAllUser} from "../../store/Actions/Users"
import {useSelector,useDispatch}from "react-redux";
import "./AllUsers.css"
export default function AllUsers(){
  console.log("ה' איתך");
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
}, [])
const usersArr=useSelector((state)=>state.usersArr);
  return(
    <>
    <h1>משתמשים</h1>
    <ul>
        {
            usersArr.map(usersArr=><><br/> <li className="li"> {usersArr.Id} {usersArr.Name} {usersArr.Password} {usersArr.Email}
             <input type="button" value="עדכון" onClick={()=>alert(usersArr.Id)}/> <input type="button" value="מחיקה" onClick={()=>alert(usersArr.Id)}/></li></> )
        }
    </ul>
    
    </>
  )
}