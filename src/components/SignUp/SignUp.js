import{ React,useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import "./SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import {AddUser,login} from "../../store/Actions/Users"
import { useState } from "react";
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
const [passwordShown, setPasswordShown] = useState(true);
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

    const showHidePassword =()=>{
        
        setPasswordShown(!passwordShown);
       {passwordShown==true?document.getElementById("pass").src="../Pic/eye.png":document.getElementById("pass").src="../Pic/invisible.png"}

   }
return (<>
        <img src="../Pic/cartoon-4764726_1920.png" className="cutePic"></img>

    
    <form onSubmit={handleSubmit(onSubmit)}>


        <div className="formDivSignUp">
        <h3>הרשמה</h3>
        <Input register={register} errors={errors} className="inputSignUp" name="Name" src="../Pic/user.png" c="formDivSignUpimg" lablName="שם פרטי" />
        <Input register={register} errors={errors} className="inputSignUp" name="Password" lablName="סיסמא"   type={passwordShown ? "password" : "text"} /> 
        <Input register={register} errors={errors}className="inputSignUp"  name="Email" lablName="מייל" c="formDivSignUpimg" src="../Pic/email.png" />
        <Input register={register} errors={errors}  className="inputSignUp"name="Phone" lablName="פלאפון" c="formDivSignUpimg" src="../Pic/phone.png" />
        <img src="../Pic/invisible.png" id="pass" className="pass2" onClick={()=>showHidePassword()}/>
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



