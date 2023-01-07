import{ React,useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import "./SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import {AddUser,login} from "../../store/Actions/Users"
const schema = yup.object({
    Name: yup.string().required(),
    Password: yup.number(),
    Email: yup.string().email().required(),
    Phone: yup.string(),
    Type: yup.number().positive().integer(),
    LastEntery:yup.date(),
    IdRole:yup.number(),
}).required();

const SignUp=()=>{

const dispatch = useDispatch();
const nav=useNavigate();
    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];

    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
     });

    const onSubmit=(data)=>{ 
        if(data.Type==2)
           data.Type=0;
        data.IdRole=5;
        data.LastEntery=new Date();
        
        console.log(data);
        AddUser(data).then(alert("נוסף בהצלחה"));
        dispatch(login(data));
        nav("/AllPools");
    }
return (<>
    <h1>הרשמה</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div1">
        <Input register={register} errors={errors} className="input" name="Name" lablName="שם מלא" />
        <Input register={register} errors={errors} className="input" name="Password" lablName="סיסמא" /> 
        <Input register={register} errors={errors}className="input"  name="Email" lablName="מייל" />
        <Input register={register} errors={errors}  className="input"name="Phone" lablName="פלאפון" />
        <label>מגזר</label><br/>
            <select  {...register("Type")}  className="select" >  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
        <Link to="login" className="navbar-brand">כבר רשום? עבור להתחברות!</Link>
        <input type="submit" className="button"/></div>
    </form>
    </>
);

}

export default SignUp;



