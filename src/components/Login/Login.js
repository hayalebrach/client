//import { useNavigate } from "react-router";
import React,{useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {login,getAllUser} from "../../store/Actions/Users"
import {getAllRole} from '../../store/Actions/Role' 
import {useDispatch, useSelector} from "react-redux";
import "./Login.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {savePool} from "../../store/Actions/Pools"
const schema = yup.object({
    Name: yup.string().required(),
    Password: yup.number().positive().integer().required()
}).required();

const Login=()=>{
   //פה אני מעדכנת על מנת שאני יוכל לבדוק אם מדובר במנהל
   let nav=useNavigate();
   useEffect(() => {
    dispatch(getAllRole());
}, []) 
  const Role = useSelector((state) =>state.Role);

   const currentUser=useSelector((state)=>state.currentUser);
   const currentPool=useSelector((state)=>state.currentPool)
   const Pools=useSelector((state)=>state.Pools)

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});

const onSubmit = (data) => { 
    dispatch(login(data));
    
    if(currentUser.IdRole==1)
    nav("/MainManagerNavBar");
    
    if(currentUser.IdRole==2){
        nav("/ManagerNavBar");

        Pools.map(pool=>pool.IdUser==currentUser.Id?dispatch(savePool(pool)):null);
       
        

    }
    
    
    if(currentUser.IdRole==3)
    nav("/UserNavBar");
    
}
//let nav=useNavigate();
// const check=()=>{
//      nav("/UserNavBar");
//}
return (<>
<h1>התחברות</h1>
       <button onClick={()=>dispatch(getAllUser())}>כל המשתמשים</button>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="div1">
         
        <Input register={register} errors={errors} className="input" name="Name" lablName="שם פרטי" type="text"/>
        <Input register={register} errors={errors}  className="input"name="Password" lablName="סיסמא" type="number"/>
        <Link to="signUp" className="navbar-brand">עדיין לא  רשום? עבור להרשמה</Link> 
       
      
        <input type="submit" className="button" />
        </div>
    </form></>)
}



export default Login;



