

// import { connect } from "react-redux";
// import './LoginUser.css';
// import { useNavigate } from "react-router";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import axios from "axios";
// import { useState } from "react";
// import { selectManagementTenant } from "../../action";


// const LoginUser = (props) => {
//   let nav = useNavigate();
//   let user = {};


//   const change = (e) => {
//     let { type, name, value } = e.target;
//     //props.state.user=user;

//     if (type == "number")
//       user[name] = +value;
//     else
//       user[name] = value;

//   }


//   const func = (e) => {

//     e.preventDefault();
//     alert("func");

//     axios.post("https://localhost:44341/api/Tenant/PostTenantByNameAndPassword", user).then(res => {
//       const tenant = res.data;
//       console.log(tenant)
//       if (tenant == null) {
//         alert("שם משתמש או סיסמא שגויים");
//       }
//       else {
//         if (tenant.Status == 1) {
//           props.selectManagementTenant(true);
//           nav("/Base/ManagerHome");
//         }
//         else
//           nav("/Base/TanentHome")
//       }
//     })
























//const SplitButton = () => {
//   const arr = [{ Id: 1, Name: "בני ברק" }, { Id: 2, Name: "ashdod" }]

//   return (
//     <>
//       <li>
//         <select>
//           {arr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
//         </select>
//         {/* <Link to="list-recipe" className="nav-link"><b>ארוחות</b></Link> */}
//         <a className="dropdown-item" href="#"><b>ארוחות</b></a>
//         <dl><a className="dropdown-item" href="#">בשרי</a></dl>
//         <dl><a className="dropdown-item" href="#">חלבי</a></dl>
//         <dl><a className="dropdown-item" href="#">פרווה</a></dl>
//         <dl><a className="dropdown-item" href="#">מנות ביניים</a></dl>
//       </li>
//     </>
//   )


// }



















//export default SplitButton;

{/* // import React from "react";
// import { useForm } from "react-hook-form";

// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

// const App = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="First Name" register={register} required />
//       <Select label="Age" {...register("Age")} />
//       <input type="submit" />
//     </form>
//   );
// }; */}

 const SplitButton =() =>{





return(
  <>





  </>
)

}
export default SplitButton;