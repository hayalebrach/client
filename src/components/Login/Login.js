import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";

import "./Login.css"
import { Link } from "react-router-dom";

const schema = yup.object({
    userName: yup.string().required(),
    password: yup.number()
}).required();

const Login=(props)=>{
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});
const onSubmit = data => {console.log(data);check()}
let nav=useNavigate();

const check=()=>{
     nav("/UserNavBar");
}
return (<>
<h1>התחברות</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="div1">
         
        <Input register={register} errors={errors} className="input" name="userName" lablName="שם פרטי" />
        <Input register={register} errors={errors}  className="input"name="password" lablName="סיסמא" />
        <Link to="signUp" className="navbar-brand">עדיין לא  רשום? עבור להרשמה</Link> 
        <input type="submit" className="button" />
        </div>
    </form></>
)

}

export default Login;



