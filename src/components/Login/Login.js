//import { useNavigate } from "react-router";
import React,{useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {login} from "../../store/Actions/Users"
import {getAllRole} from '../../store/Actions/Role' 
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import "./Login.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

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
   const {currentUser ,Role} = useSelector(state => ({
    currentUser: state.currentUser,
    Role:state.Role
 }), shallowEqual);

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});

const onSubmit = (data) => { 
    dispatch(login(data));
    let x=Role[currentUser.IdRole-1];
    console.log(x.TypeUser);
    console.log(currentUser.Id);
    if(x.TypeUser=="מנהל אתר")   
    nav("/MainManagerNavBar");
    else
    nav("/UserNavBar");
    
}
return (<>
<h1>התחברות</h1>
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



