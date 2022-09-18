// // import {useDispatch} from "react-redux";
// // import {AddRole} from ".././store/Actions/Role";
// // export default function AddDetailsCard() {
// //     const dispatch=useDispatch();
// //   let p={
// //     TypeUser:""
// //   }

// //   const change=(e)=>{
// //     let {name,type,value} = e.target;
// //     if(type === "number")
// //     value=+value;
// //     p[name]=value;
// // }

// //   const Send =(e)=>{
// //     console.log(p)
// //     dispatch(AddRole({TypeUser:p.TypeUser}));
// //  }
// // //  const c=()=>{
// // //    alert("hcdsgdr")
// // //    dispatch(AddRole());
// // //  }
// // return(
// //   <>
// //   <form>
// //   <label >הוסף תפקיד</label><br/>
// //   <input type="text"  name="TypeUser" onChange={change}/>
// //   {/* <input value="yyyyy" type="button" onClick={()=>c()}/> */}
// //   <input type="button" value="הרשם" className="" onClick={()=>Send()}/>
// //  </form>

// //   </>
// // )

// // }
// import {  useSelector,useDispatch } from "react-redux";
// import {  useEffect } from "react";
// import { useNavigate } from "react-router";
// import { Button } from "@mui/material";
// import TextField from '@mui/material/TextField';
// import {}from '../store/Actions/Users';
// import { useParams } from "react-router";
// import CreateIcon from '@material-ui/icons/Create';
// export default function SplitButton(){
//   const dispatch=useDispatch();
//   let nav=useNavigate();
//   const Role=useSelector(state=>state.Role);
//   const RoleSchema = {Id:role.Id,TypeUser:role.TypeUser};
//   const change = (e) => {
//     const inputName = e.target.name;
//     const inputValue = e.target.value;
//     RoleSchema[inputName] = inputValue;
//   }
//   let f = useParams();
//    useEffect(() => {
//     f=f.flag;
//     },[])

//     function update(){
//       nav(("/SplitButton/" + true))
//   }

//   function deleteUser(){
//     user.UserType=1;
//     dispatch(updateUser(user));
// }




// return (<>-
//   <div className="div-user">
//   {f.flag=="true"?
//   <h2 className="h2-div-user"> עדכון פרופיל</h2>
//   :<div>
//   <div className="div-icon-update" onClick={()=>{update()}}><CreateIcon/></div> 
//   {/* <div>מחיקת משתמש</div> */}
//   {/* <Button onClick={()=>{goToSwal()}}><div className="div-delete">מחיקת משתמש</div> </Button> */}
//   <h2 className="h2-div-user">  הפרופיל שלי</h2></div>}
//   <TextField id="standard-basic" name="TypeUser" placeholder={user.TypeUser} variant="standard"  disabled={f.flag == "false"} onChange={change}/><br/><br/>
//   <TextField id="standard-basic" type="Password" name="password" placeholder={user.Password}  disabled={f.flag == "false"}variant="standard" onChange={change}/><br/><br/>
  
//   {f.flag=="true"?
//   <Button variant="outlined" onClick={()=>{dispatch(updateUser(userSchema))}} ><DoneOutlineIcon/></Button>
//   :
//   null}
//   </div> 
//   {/* } */}
//   </>)


// }