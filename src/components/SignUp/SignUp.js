import{ React,useEffect, useState }  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import "./SignUp.css"
import { Link, useNavigate } from "react-router-dom";
import {AddUser,login} from "../../store/Actions/Users";

const schema = yup.object({
    Name: yup.string().required("זהו שדה חובה"),
    Password: yup.string().min(4,"סיסמא חיבת להכיל לפחות 4 ספרות").matches(/[0-9]/,"סיסמא חיבת להכיל מספרים").required("זהו שדה חובה"),
    Email: yup.string().email("כתובת מייל לא תקינה").required("זהו שדה חובה"),
    Phone: yup.string().matches(/[0-9]/," פלאפון חיב להכיל מספרים").required("זהו שדה חובה"),
    Type: yup.number().positive().integer(),
    LastEntery:yup.date(),
    IdRole:yup.number(),

}).required();



const SignUp=()=>{
const [passwordShown, setPasswordShown] = useState(true);
const dispatch = useDispatch();

const nav=useNavigate();
    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];
    const {currentUser,currentPool} = useSelector(state => ({
        currentUser:state.currentUser,
        currentPool:state.currentPool
    }), shallowEqual);
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
     });


    const onSubmit=(data)=>{ 
        if(data.Type==2)
           data.Type=0;
        if(currentUser&&currentUser.IdRole==2)
        data.IdRole=3;
        else
        data.IdRole=5;

        data.LastEntery=new Date();
        console.log(data);
        AddUser(data).then(alert("נוסף בהצלחה"));
        
        if(currentUser)
        {
            if(currentUser.IdRole==2){
                nav("/AddDetailsCours");
            }
          
        }
        else{

            dispatch(login(data));
            nav("/AllPools");
        }
        
    }

    const showHidePassword =()=>{
        
        setPasswordShown(!passwordShown);
       {passwordShown==true?document.getElementById("pass").src="../Pic/eye.png":document.getElementById("pass").src="../Pic/invisible.png"}

   }
return (<>
        <img src="../Pic/cartoon-4764726_1920.png" className="cutePic"></img>

    
    <form onSubmit={handleSubmit(onSubmit)}>


        <div className="formDivSignUp">

        {currentUser.IdRole==2?<h3>הרשמת מדריך</h3>:null}
        {currentUser?null:<h3>הרשמה</h3>}
        <Input register={register} errors={errors} className="inputSignUp" name="Name" src="../Pic/user.png" c="formDivSignUpimg" lablName="שם פרטי" />
        <Input register={register} errors={errors} className="inputSignUp" name="Password" lablName="סיסמא"   type={passwordShown ? "password" : "text"} /> 
        <Input register={register} errors={errors}className="inputSignUp"  name="Email" lablName="מייל" c="formDivSignUpimg" src="../Pic/email.png" />
        <Input register={register} errors={errors}  className="inputSignUp"name="Phone" lablName="פלאפון" c="formDivSignUpimg" src="../Pic/phone.png" />
        <img src="../Pic/invisible.png" id="pass" className="pass2" onClick={()=>showHidePassword()}/>
        <label>מגזר</label><br/>
            <select  {...register("Type")}  className="select" >  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
        {currentUser.IdRole==2?<input type="submit" value="הוספת מדריך"/>:null}
        {currentUser?null:<> 
        <Link to="login" className="navbar-brand">כבר רשום? עבור להתחברות!</Link>
        <input type="submit" className="submitSignUp"/>
        </>} 
        </div>
    </form>
    </>
);

}

export default SignUp;



