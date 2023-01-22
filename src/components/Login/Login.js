import React, { useEffect,useState } from "react";
//import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import { login ,LastDate} from "../../store/Actions/Users"
import { getAllRole } from '../../store/Actions/Role'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import "./Login.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { GetAllPools,SavePool} from "../../store/Actions/Pools"
import { GetAllCourses } from "../../store/Actions/Cours";
import { date } from "yup/lib/locale";
import { SettingsInputSvideoRounded } from "@material-ui/icons";

//הצבת תנאים להכנסצת ושליחת נתונים מהמסמך
const schema = yup.object({
    Name: yup.string().required("זהו שדה חובה"),
    Password: yup.string().min(4,"סיסמא חיבת להכיל לפחות 4 ספרות").matches(/[0-9]/,"סיסמא חיבת להכיל מספרים").required("זהו שדה חובה")
}).required();


const Login = () => {
    //תאריך נוכחי
    const today=new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' +today.getDate();
    console.log(date);
    //פה אני מעדכנת על מנת שאני יוכל לבדוק אם מדובר במנהל
    let nav = useNavigate();
    const dispatch = useDispatch();
    const [passwordShown, setPasswordShown] = useState(true);
    useEffect(() => {
        dispatch(getAllRole());
        dispatch(GetAllPools());


    }, [])

    const { currentUser ,poolsArr} = useSelector(state => ({
        currentUser: state.currentUser,
        poolsArr: state.poolsArr
    }), shallowEqual);


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    useEffect(() => {
        //בדיקת רמת התפקיד שלך ושליחה למקום המתאים
        if (currentUser) {
            let date;
            date=currentUser.LastEntery;
            LastDate(currentUser);
            currentUser.LastEntery=date;
            console.log(currentUser.LastEntery);
            switch (currentUser.IdRole) {
                case 1:{
                   nav("/MainManagerNavBar");
                    break;  
                }
                case 2: {
                   
                    saveThePool(currentUser.Id);
                    nav("/ManagerNavBar");
                    break;
                }
                default: {
                    
                    nav("/AllPools");
                }
            }
        }
    }, [currentUser])
    const saveThePool=(Id)=>{
        let pool=poolsArr.find(x=>x.IdUser==Id);
        dispatch(SavePool(pool));
    }
    const onSubmit = (data) => {
        dispatch(login(data));
    }
    const showHidePassword =()=>{
        
         setPasswordShown(!passwordShown);
        {passwordShown==true?document.getElementById("pass").src="../Pic/eye.png":document.getElementById("pass").src="../Pic/invisible.png"}

    }

    return (<>
            <img src="../Pic/cartoon-4764726_1920.png" className="cutePic"></img>

    
        
        <form onSubmit={handleSubmit(onSubmit)}>    
            <div className="formDiv" ><br/>
            <h3>התחברות משתמש</h3>
                <Input register={register} errors={errors} className="inputLogin" name="Name" lablName="שם פרטי" type="text" src="../Pic/user.png"/>
                <Input register={register} errors={errors} className="inputLogin" name="Password" lablName="סיסמא"   type={passwordShown ? "password" : "text"}  />
                <Link to="TofesForgteTheKode" className="forgetThePath">שכחתי סיסמא</Link>
                <Link to="signUp" className="navbar-brand">עדיין לא  רשום? עבור להרשמה</Link>

                <input type="submit" className="submitLogin" />
            </div>
            <img src="../Pic/invisible.png" id="pass" className="pass" onClick={()=>showHidePassword()}/>

        </form>
        
        
        </>
        
        )
}



export default Login;



