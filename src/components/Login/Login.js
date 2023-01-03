//import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import { login } from "../../store/Actions/Users"
import { getAllRole } from '../../store/Actions/Role'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import "./Login.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { GetAllPools, savePool, savePoolByManager } from "../../store/Actions/Pools"
import { GetAllCourses } from "../../store/Actions/Cours";
import { date } from "yup/lib/locale";
import { SettingsInputSvideoRounded } from "@material-ui/icons";


//הצבת תנאים להכנסצת ושליחת נתונים מהמסמך
const schema = yup.object({
    Name: yup.string().required(),
    Password: yup.number().positive().integer().required()
}).required();

const Login = () => {
    //פה אני מעדכנת על מנת שאני יוכל לבדוק אם מדובר במנהל
    let nav = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRole());
        dispatch(GetAllPools());


    }, [])

    const { currentUser, Role } = useSelector(state => ({
        currentUser: state.currentUser,
        Pools: state.poolsArr,
        Role: state.Role
    }), shallowEqual);


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    useEffect(() => {
        //בדיקת רמת התפקיד שלך ושליחה למקום המתאים
        if (currentUser) {
            switch (currentUser.IdRole) {
                case 1:
                    nav("/MainManagerNavBar");
                    break;

                case 2: {

                    dispatch(savePoolByManager(currentUser.Id));
                    nav("/ManagerNavBar");
                    break;
                }
                default: {
                    nav("/AllPools");
                }
            }
        }
    }, [currentUser])
    const onSubmit = (data) => {
        dispatch(login(data));

        // loginNotDispatch(date)
        //.then(x=>setUser(x.data))
    }

    return (<>
    
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formDiv" ><br/>
            <h3>התחברות משתמש</h3>

                <Input register={register} errors={errors} className="inputLogin" name="Name" lablName="שם פרטי" type="text" src="../Pic/user.png"/>
                <Input register={register} errors={errors} className="inputLogin" name="Password" lablName="סיסמא" type="number" src="../Pic/padlock.png"/>
                <Link to="signUp" className="navbar-brand">עדיין לא  רשום? עבור להרשמה</Link>

                <input type="submit" className="submitLogin" />
            </div>
        </form>
        
        
        </>
        
        )
}



export default Login;



