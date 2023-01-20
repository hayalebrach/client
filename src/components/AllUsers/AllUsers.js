import {useEffect} from "react";
import {getAllHistoryOfUser, getAllUsers} from "../../store/Actions/Users"
import {getAllUsersByIdPool} from "../../store/Actions/Pools"
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import "./AllUsers.css"
import { useState } from "react";
export default function AllUsers(){

  const {currentPool,HistoryUser,UsersPool,allUsers} = useSelector(state => ({
    currentPool: state.currentPool,
    HistoryUser:state.HistoryUser,
    UsersPool:state.UsersPool,
    allUsers:state.allUsers
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

function Func(user){  
  let index;
  for(let i=0;i<allUsers.length;i++){
      if(allUsers[i].Id==user.IdUser)
       index =i;
  }      
  
  return allUsers[index];
}



  return(
    <>
    <h1>לקוחות הבריכה</h1>
    
        {
           UsersPool.map(user=><><div className="classicDiv">  <b>{Func(user).Name}</b><br/>  {Func(user).Phone} :פלאפון <br/> {Func(user).Email} :מייל <br/><br/>
           <input type="button"  value="לפרטי המשתמש" onClick={()=>getHistory(UsersPool.IdUser,UsersPool.IdPool)}/></div></> )
        }
    <br/>
      <input type="button" className="button1" value="חזרה לדף הבית" onClick={()=>nav("/ManagerNavBar")}/>
    </>
  )
}