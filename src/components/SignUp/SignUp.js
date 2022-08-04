import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";

import "./SignUp.css"
import { Link } from "react-router-dom";

const schema = yup.object({
    userName: yup.string().required(),
    password: yup.number(),
    mail: yup.string().email().required(),
    phone: yup.number().positive().integer().required().max(10),
    type: yup.number().positive().integer(),
    authorization:yup.number().positive().integer().required()

}).required();

const SignUp=()=>{
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});
const onSubmit = data => console.log(data);

return (<>
    <h1>הרשמה</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div1">
        <Input register={register} errors={errors} className="input" name="userName" lablName="שם פרטי" />
        <Input register={register} errors={errors} className="input" name="password" lablName="סיסמא" /> 
        <Input register={register} errors={errors}className="input"  name="mail" lablName="מייל" />
        <Input register={register} errors={errors}  className="input"name="phone" lablName="פלאפון" />
        <Input register={register} errors={errors} className="input" name="type" lablName="זכר/נקבה" />
        <Input register={register} errors={errors} className="input" name="authorization" lablName="הרשאה" />
        


        <Link to="login" className="navbar-brand">כבר רשום? עבור להתחברות!</Link>
        <input type="submit"value="הרשם" className="button" /></div>
    </form>
    </>
);

}

export default SignUp;



