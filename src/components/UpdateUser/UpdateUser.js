
import{ React,useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import { useParams } from "react-router";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import { Link } from "react-router-dom";
import {updateUser} from "../../store/Actions/Users"
import {getAllRole} from "../../store/Actions/Role"
const schema = yup.object({
    Name: yup.string().required(),
    Password: yup.number(),
    Email: yup.string().email().required(),
    Phone: yup.number().positive().integer().required(),
    Type: yup.number().positive().integer(),
    LastEntery:yup.date('04/09/2022'),
    IdRole:yup.string().required()
}).required();
export default function UpdateUser(){
    const dispatch = useDispatch();
    let f = useParams();

    useEffect(() => {
        dispatch(getAllRole());
        f=f.flag;
    }, []) ;

    const typeArr = [{ Id: 1, Name: "אישה" }, { Id:2, Name: "גבר" }];
    const {Role,User} = useSelector(state => ({
        Role: state.Role,
        User:state.User
      }), shallowEqual);

    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
     });
     const userSchema = {
        Id:User.Id,
        Name:User.Name,
        Phone:User.Phone,
        Email:User.Email,
        Password:User.Password,
        Type:User.Type,
        IdRole:User.IdRole,
        LastEntery:User.LastEntery}
  
              const change = (e) => {
              const inputName = e.target.name;
              const inputValue = e.target.value;
              userSchema[inputName] = inputValue;
              console.log(userSchema[inputName]);
            }

    // const onSubmit=(data)=>{ 
    //     console.log("userSchema");
    //     console.log(userSchema.Name);
    //     //dispatch(updateUser(userSchema));
    // }
return (<>
    <h1>עדכון</h1>
    <form>
        <div className="div1">

        <label >שם פרטי</label><br/>
        <input type="text" className="input"  name="Name" placeholder={User.Name} variant="standard" onChange={change} defaultValue={User.Name} disabled={f.flag=="false"}/>
        
        <label >סיסמא</label><br/>
        <input type="number" className="input" name="Phone" placeholder={User.Password} variant="standard" onChange={change} defaultValue={User.Password} disabled={f.flag=="false"}/>
        
        <label >מייל</label><br/>
        <input type="text" className="input" name="Email" placeholder={User.Email} variant="standard" onChange={change} defaultValue={User.Email} disabled={f.flag=="false"}/>
        
        <label >פלאפון</label><br/>
        <input type="text" className="input" name="Phone" placeholder={User.Phone} variant="standard" onChange={change} defaultValue={User.Phone} disabled={f.flag=="false"}/>
        <label>מגזר</label><br/>
            <select    className="select" variant="standard" onChange={change}>  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
            <label>תפקיד</label><br/>
            <select className="select" variant="standard" onChange={change}>  
                 {Role.map(x => <option key={x.TypeUser} value={x.Id}>{x.TypeUser}</option>)}
           </select><br/>
        <input type="button" className="button" onClick={()=>dispatch(updateUser(userSchema))}/></div>
    </form>
    </>
); 
}