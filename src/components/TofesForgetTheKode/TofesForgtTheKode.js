import React,{ useEffect, useState }from "react";
import {sendMail,GetUserByMail,changeThePassword} from "../../store/Actions/Users";
import './TofesForgetTheKode.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function TofesForgetTheKode () {
    //SetFlag("false");
    let [flag,SetFlag]=useState("false");
    const[ Mail,SetMail]=useState();
    const [Id,SetId]=useState();
    let [PassWord,SetPassWord]=useState();;
    let [Pass,SetPass]=useState();
    let [f,Setf]=useState("false");
    // const [user,SetUser]=useState();
    let user;
    const nav=useNavigate();
    const change = (e) => {
        SetPassWord(e.target.value);
        
      }

      const changePass=(e)=>{
        SetPass(e.target.value);
        console.log(Pass==PassWord);
      }

      const send=()=>{   
        console.log(Mail,Id)
        changeThePassword(Id,Pass).then(alert("סיסמא אושרה"));
        Setf("true");       
      }
      const SendMail=()=>{
        console.log(Mail,Pass);
        let subject="סיסמתך עבור swimMood ";
        let body=" סיסמתך היא "+Pass;
        sendMail(body,Mail,subject).then(console.log("nnjfjkhehf"));
        //alert("הסיסמא נשלחה אליך למייל");
        nav("./AllPools");
        
      }

      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (values) => {
      GetUserByMail(values.email).then(x=>Setuser(x));
      // console.log(user);
      //  console.log(values.email);
      //  Mail=values.email;
      //  console.log(Mail);
      //  console.log(Pass==PassWord);
      };
      const Setuser=(x)=>{
           user=x.data;
           if(user!=null){
            console.log(user);
            SetFlag("true");
            console.log(flag);
            SetId(user.Id);
            SetMail(user.Email);

           }
      }
    return (<>


{f=="false"?<>
<form onSubmit={handleSubmit(onSubmit)}>
            <div className="formDiv2" ><br/>
            <h3>שכחתי סיסמא</h3>
            <br/>
          
            <input
            placeholder="הכנס מייל"
            type="text"
            {...register("email",  { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} /><br/>
            {errors.email && <span>כתובת מייל לא תקינה</span>}<br/>
            {flag=="false"?<><span>משתמש לא קים</span><br/></>:<>
              <input type="text" placeholder={"הכנס סיסמא"} className="inputLogin" name="Password" onChange={change}/><br/>
              <input type="text" placeholder={"לאימות סיסמא"} name="Pass"className="inputLogin" onChange={changePass}/>< br/>
              </>
            
            }
               {flag=="false"?<input type="submit" value="לאישור" />:
             <>{PassWord==Pass&&PassWord!=null&&Pass!=null? <input type="submit" value="לאישור סיסמא" onClick={()=>send()}/>:<span>סיסמאות לא שוות</span>}</>
            }
            </div>
        </form>





</>:<>

<div className="formDiv" ><br/>
<span>סיסמתך שונתה בהצלחה<br/> על מנת לשלוח סיסמא זו למייל שלך לחץ לאישור</span><br/>
<input type="button" value="לאישור"  onClick={()=>SendMail()}/>
</div>



</>}
    
    </>)
}
