import{ React,useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {useDispatch,useSelector} from "react-redux";
import "./SignUp.css"
import { Link } from "react-router-dom";
import {AddUser} from "../../store/Actions/Users"
import {getAllRole} from "../../store/Actions/Role"
const schema = yup.object({
    Name: yup.string().required(),
    Password: yup.number(),
    Email: yup.string().email().required(),
    Phone: yup.number().positive().integer().required(),
    Type: yup.number().positive().integer(),
    LastEntery:yup.date(),
    IdRole:yup.string().required()
}).required();

const SignUp=()=>{

const dispatch = useDispatch();
    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
     });

    const onSubmit=(data)=>{
        if(data.Type===2)
           data.Type=false;
        data.IdRole=5;
        data={...data,Status:true}
        dispatch(AddUser(data));
    }
return (<>
        <img src="../Pic/cartoon-4764726_1920.png" className="cutePic"></img>

    
    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="formDivSignUp">
        <h3>הרשמה</h3>
        <Input register={register} errors={errors} className="inputSignUp" name="Name" src="../Pic/user.png" lablName="שם פרטי" />
        <Input register={register} errors={errors} className="inputSignUp" name="Password" lablName="סיסמא" src="../Pic/padlock.png" /> 
        <Input register={register} errors={errors}className="inputSignUp"  name="Email" lablName="מייל" src="../Pic/email.png" />
        <Input register={register} errors={errors}  className="inputSignUp"name="Phone" lablName="פלאפון" src="../Pic/phone.png" />
        <label>מגזר</label><br/>
            <select  {...register("Type")}  className="select" >  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
           
        <Link to="login" className="navbar-brand">כבר רשום? עבור להתחברות!</Link>
        

        <input type="submit" className="submitSignUp"/></div>
    </form>
    </>
);

}

export default SignUp;



