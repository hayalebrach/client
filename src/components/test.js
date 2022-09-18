
// import {  useSelector,useDispatch } from "react-redux";
// import {  useEffect } from "react";
// import { useNavigate } from "react-router";
// import { Button } from "@mui/material";
// import TextField from '@mui/material/TextField';
// import {updateUser}from '../store/Actions/Users';
// import { useParams } from "react-router";
// import CreateIcon from '@material-ui/icons/Create';
// import swal from 'sweetalert';

// export default function User(){
//   const dispatch=useDispatch();
//   let nav=useNavigate();
  
//   const {currentUser}=useSelector(state=>state.currentUser);
 
// const userSchema = {Id:user.Id, Name:user.Name,Phone:user.Phone,Mail:user.Mail ,Password :user.Password,UserType:user.UserType}
// const change = (e) => {
//   const inputName = e.target.name;
//   const inputValue = e.target.value;
//   userSchema[inputName] = inputValue;
// }
// let f = useParams();
// useEffect(() => {
//     f=f.flag;
//     },[])
// function update(){
//     nav(("/User/" + true))
// }
// function deleteUser(){
//     user.UserType=1;
//     dispatch(updateUser(user));
// }
//     return (<>-
//     <div className="div-user">
//     {f.flag=="true"?
//     <h2 className="h2-div-user"> עדכון פרופיל</h2>
//     :<div>
//     <div className="div-icon-update" onClick={()=>{update()}}><CreateIcon/></div> 
//     {/* <div>מחיקת משתמש</div> */}
//     {/* <Button onClick={()=>{goToSwal()}}><div className="div-delete">מחיקת משתמש</div> </Button> */}
//     <Button onClick={()=>{deleteUser()}}><div className="div-delete">מחיקת משתמש</div> </Button>
//     <h2 className="h2-div-user">  הפרופיל שלי</h2></div>}
//     <TextField id="standard-basic" name="Name" placeholder={user.Name} variant="standard"  disabled={f.flag == "false"} onChange={change}/><br/><br/>
//     <TextField id="standard-basic" name="Phone" placeholder={user.Phone} variant="standard"  disabled={f.flag == "false"} onChange={change}/><br/><br/>
//     <TextField id="standard-basic" name="Mail" placeholder={user.Mail} variant="standard"  disabled={f.flag == "false"} onChange={change}/><br/><br/>
//     <TextField id="standard-basic" type="Password" name="password" placeholder={user.Password}  disabled={f.flag == "false"}variant="standard" onChange={change}/><br/><br/>
    
//     {f.flag=="true"?
//     <Button variant="outlined" onClick={()=>{dispatch(updateUser(userSchema))}} ><DoneOutlineIcon/></Button>
//     :
//     null}
//     </div> 
//     {/* } */}
//     </>)
// }





