//import { useNavigate } from "react-router";
import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {login,getAllUser} from "../../store/Actions/Users"
import {useDispatch, useSelector} from "react-redux";
import "./Login.css"
import { Link } from "react-router-dom";

const schema = yup.object({
    userName: yup.string().required(),
    password: yup.number().positive().integer().required()
}).required();

const Login=()=>{
     
    const currentUser=useSelector(state =>state.currentUser)
const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});
const onSubmit = (data) => { 
    console.log("lkjg");
    dispatch(login(data));
    console.log(currentUser); 
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
         
        <Input register={register} errors={errors} className="input" name="userName" lablName="שם פרטי" type="text"/>
        <Input register={register} errors={errors}  className="input"name="password" lablName="סיסמא" type="number"/>
        <Link to="signUp" className="navbar-brand">עדיין לא  רשום? עבור להרשמה</Link> 
       
      
        <input type="submit" className="button" />
        </div>
    </form></>)
}



export default Login;



