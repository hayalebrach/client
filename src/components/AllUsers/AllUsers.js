import {useEffect, useState} from "react"
import "./AllUsers.css"
export default function AllUsers(){
  const [Users,SetUsers]=useState([]);

  useEffect(()=>{
      const fakeUsers=
      [
          {id:"1111",name:"ליאל",email:"lieli@gmail.com",password:1212},
          {id:"2222",name:"חיוש",email:"chayush@gmail.com",password:2212},
          {id:"3333",name:"סיווני",email:"sivani@gmail.com",password:121572},
          {id:"4444",name:"ספירוש",email:"sapirush@gmail.com",password:555545}
      ];

      SetUsers(fakeUsers);

  },[])

  return(
    <>
    <h1>משתמשים</h1>
    <ul>
        {
            Users.map(user=><><br/> <li className="li">{user.name} {user.id}  {user.password} {user.email}</li></> )
        }
    </ul>
    
    </>
  )
}