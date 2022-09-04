import {React,useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddManager} from "../../store/Actions/Manager";
import {useSelector,useDispatch} from 'react-redux'
import {getAllRole} from "../../store/Actions/Role"
//import "./AddDetailsManager.css";
const schema = yup.object({
    Name: yup.string().required(),
    mail: yup.string().email().required(),
    Phone: yup.number().positive().integer().required(),  
    password: yup.number().positive().integer().required(),
    type: yup.number().positive().integer(),
    role:yup.string().required(),
}).required();

export default function AddDetailsManager() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRole());
    }, []) 
    const Role = useSelector((state) =>state.Role)
    console.log(Role);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) =>{ 
        console.log(data);
        // data.typeArr=typeArr[data.typeArr-1].Name;  
        // data.Role=Role[data.Role-1].Name;     
        AddManager(data);
        console.log(data);
   }
   const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];


   
   //מין,,שם,טלפון,מייל,סיסמא,סוג המשתמש,
    return (<>
                 <h1>AddDetailsManager</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* //<div className="div1"> */}
            <Input register={register} errors={errors} name="Name" lablName="שם" className="" type="text"/>
            <Input register={register} errors={errors} name="Phone" lablName="טלפון" className="" type="number" />
            <Input register={register} errors={errors} name="mail" lablName="מייל" className="" type="text"/>
            <Input register={register} errors={errors} name="password" lablName="סיסמא" className="" type="number"/> 
            <label>מגזר</label><br/>
            <select  {...register("type")} className="" >  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
            <label>תפקיד</label><br/>
            <select  {...register("role")}>  
                 {Role.map(Role =><option key={Role.Id} value={Role.Id}>{Role.Name}</option>)}
           </select><br/>
           
           {/* <label>:אחר</label><br/>
           <input type="text" className="input" {...register("role")} />
           <p>{errors["role"]?.message}</p> */}
             <input type="submit"/>
            {/* </div> */}
        </form>
        </>);
}






