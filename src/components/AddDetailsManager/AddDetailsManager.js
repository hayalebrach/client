
import{ React}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {AddUser,login} from "../../store/Actions/Users"
import { useNavigate } from "react-router";
const schema = yup.object({
    Name: yup.string().required(),
    Password: yup.number(),
    Email: yup.string().email().required(),
    Phone: yup.string(),
    Type: yup.number().positive().integer(),
    LastEntery:yup.date(),
    IdRole:yup.number(),
}).required();

const AddDetailsManager=()=>{
const nav=useNavigate()
const dispatch = useDispatch();

    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];

    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
     });

     const onSubmit=(data)=>{ 
      console.log("jvbkfbdsvahv");
    if(data.Type==2){
        data.Type=0;
    }
     data.IdRole=2;
     data.LastEntery=new Date();
     console.log(data);
     AddUser(data).then();
     dispatch(login(data));
     //nav("/AddDetailsPool");
     
    }
return (<>
    <h1>הוספת מנהל בריכה</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div1">
        <Input register={register} errors={errors} className="input" name="Name" lablName="שם מלא" />
        <Input register={register} errors={errors} className="input" name="Password" lablName="סיסמא" /> 
        <Input register={register} errors={errors}className="input"  name="Email" lablName="מייל" />
        <Input register={register} errors={errors} className="input"name="Phone" lablName="פלאפון" />
        <label>מגזר</label><br/>
            <select  {...register("Type")}  className="select" >  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
        <input type="submit" className="button" value="אישור"/></div>
    </form>
    </>
);

}

export default AddDetailsManager;








