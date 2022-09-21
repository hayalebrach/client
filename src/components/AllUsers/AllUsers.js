import {useEffect} from "react";
import {getAllUser,getById} from "../../store/Actions/Users"
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import "./AllUsers.css"
export default function AllUsers(){
  const nav=useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
}, []);
const {usersArr} = useSelector(state => ({
  usersArr: state.usersArr,
}), shallowEqual);

const update=(Id)=>{
  console.log(Id);
  //dispatch(getById(Id));
  //nav(("/UpdateUser/));
}
  return(
    <>
    <h1>משתמשים</h1>
    <ul>
        {
            usersArr.map(usersArr=><><br/> <li className="li" > {usersArr.Id} {usersArr.Name} {usersArr.Email}
             <input type="button" value="עדכון" onClick={()=>update(usersArr.Id)}/> <input type="button" value="מחיקה" onClick={()=>alert(usersArr.Id)}/></li></> )
        }
    </ul>
    
    </>
  )
}