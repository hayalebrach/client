import {useEffect, useState} from "react"
import {useSelector}from "react-redux";
import "./AllUsers.css"
export default function AllUsers(){
  const usersArr=useSelector(state=>this.state.usersArr)
  
  // const [Users,SetUsers]=useState([]);

  // useEffect(()=>{
  //     const fakeUsers=
  //     [
  //         {id:"1111",name:"ליאל",email:"lieli@gmail.com",password:1212},
  //         {id:"2222",name:"חיוש",email:"chayush@gmail.com",password:2212},
  //         {id:"3333",name:"סיווני",email:"sivani@gmail.com",password:121572},
  //         {id:"4444",name:"ספירוש",email:"sapirush@gmail.com",password:555545}
  //     ];

  //     SetUsers(fakeUsers);

  // },[])

  return(
    <>
    <h1>משתמשים</h1>
    <ul>
        {
            usersArr.map(usersArr=><><br/> <li className="li">{usersArr.name} {usersArr.id}  {usersArr.password} {usersArr.email}</li></> )
        }
    </ul>
    
    </>
  )
}