
import{ React,useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {useDispatch,useSelector} from "react-redux";
import {AddManager} from "../../store/Actions/Users"
import {getAllRole} from "../../store/Actions/Role"
import { useNavigate } from "react-router";
const schema = yup.object({
    Name: yup.string().required(),
    Password: yup.number(),
    Email: yup.string().email().required(),
    Phone: yup.number().positive().integer().required(),
    Type: yup.number().positive().integer(),
    LastEntery:yup.date('04/09/2022'),
    IdRole:yup.string().required()
}).required();

const SignUp=()=>{
const nav=useNavigate()
const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRole());
    }, []) 

    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 0, Name: "גבר" }];
    const Role = useSelector((state) =>state.Role);
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
     });
     const currentUser=useSelector((state)=>state.currentUser);
     const onSubmit=(data)=>{ 
        dispatch(AddManager(data));
        console.log(currentUser);
        console.log("hfgdfd");
        nav("/AddDetailsPool");
    }

return (<>
    <h1>הוסםת מנהל בריכה</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div1">
        <Input register={register} errors={errors} className="input" name="Name" lablName="שם פרטי" />
        <Input register={register} errors={errors} className="input" name="Password" lablName="סיסמא" /> 
        <Input register={register} errors={errors} className="input"  name="Email" lablName="מייל" />
        <Input register={register} errors={errors}  className="input"name="Phone" lablName="פלאפון" />
        <label>מגזר</label><br/>
            <select  {...register("Type")}  className="select" >  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
           <label>תפקיד</label><br/>
            <select  {...register("IdRole")}  className="select" >  
                 {Role.map(x => <option key={x.TypeUser} value={x.Id}>{x.TypeUser}</option>)}
           </select><br/>
        <input type="submit" className="button" value="אישור"/></div>
    </form>
    </>
);

}

export default SignUp;








