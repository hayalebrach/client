
import{ React,useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import {AddUser,login} from "../../store/Actions/Users";
import {getAllRole} from "../../store/Actions/Role";

import { useNavigate } from "react-router";
const schema = yup.object({
    Name: yup.string().required("זהו שדה חובה"),
    Password: yup.string().min(4,"סיסמא חיבת להכיל לפחות 4 ספרות").matches(/[0-9]/,"סיסמא חיבת להכיל מספרים").required("זהו שדה חובה"),
    Email: yup.string().email("כתובת מייל לא תקינה").required("זהו שדה חובה"),
    Phone: yup.string().required("זהו שדה חובה"),
    Type: yup.number().positive().integer(),
    LastEntery:yup.date(),
    IdRole:yup.number(),
}).required();

const AddDetailsManager=()=>{
const nav=useNavigate()
const dispatch = useDispatch();
const {Role} = useSelector(state => ({
    Role: state.Role
 }), shallowEqual);
useEffect(() => {
    dispatch(getAllRole());
  }, [])

    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];

    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
     });

     const onSubmit=(data)=>{ 
      console.log("jvbkfbdsvahv");
      if(data.Type==2){
        data.Type=0;
    }
     
     data.LastEntery=new Date();
     console.log(data);
     //AddUser(data).then();
     if(data.IdRole==2)
     nav("/AddDetailsPool");
    
       if(data.IdRole==1){
           alert("נוסף בהצלחה בתור מנהל האתר");
           nav("/MainManagerNavBar");
       }
           
     
    }
return (<>
    <h1>הוספת מנהל בריכה</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formDivSignUp" >
        <Input register={register} errors={errors} className="inputLogin" type="text" name="Name" lablName="שם מלא" />
        <Input register={register} errors={errors} className="inputLogin" type="text" name="Password" lablName="סיסמא" /> 
        <Input register={register} errors={errors}className="inputLogin"  type="text" name="Email" lablName="מייל" />
        <Input register={register} errors={errors} className="inputLogin" type="text" name="Phone" lablName="פלאפון" />
        <label>מגזר</label><br/>
            <select  {...register("Type")}  className="select" >  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
         <label>תפקיד</label><br/>
           <select  {...register("IdRole")}  className="select" >  
                 {Role.map(x => <option key={x.Id} value={x.Id}>{x.TypeUser}</option>)}
           </select><br/>
        <input type="submit" className="button" value="אישור"/></div>
    </form>
    </>
);

}

export default AddDetailsManager;








