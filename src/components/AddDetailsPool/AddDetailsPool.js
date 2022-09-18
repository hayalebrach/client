import React,{useEffect}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {getAllErea,AddPool} from "../../store/Actions/Pools";
import { useDispatch,useSelector ,shallowEqual} from "react-redux";
const schema = yup.object({
    IdUser:yup.number().positive().integer().required(),
    Name: yup.string().required(),  
    IdErea:yup.string().required(), 
    Adress: yup.string().required(), 
    Price: yup.number().positive().integer().required(),
    Amount: yup.number().positive().integer().required(),
    Phone: yup.number().positive().integer().required()
}).required();

export default function AddDetailsPool() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllErea());
    }, []) 
  const { Erea, currentUser } = useSelector(state => ({
     Erea: state.Erea,
     currentUser: state.currentUser
  }), shallowEqual);
  console.log(Erea)

    console.log(currentUser.Id);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        dispatch(AddPool(data));
        console.log(data);
    }
    return (<>
                 <h1>הוספת פרטי הבריכה</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="Name" lablName="שם הבריכה" className="" type="text"/>
            <Input register={register} errors={errors} name="Adress" lablName="כתובת" className="" type="text"/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר ליחיד" className="" type="number"/>
            <Input register={register} errors={errors} name="Amount" lablName="מס' אנשים" className="" type="number"/>
            <Input register={register} errors={errors} name="Phone" lablName="טלפון" className="" type="number"/>
            <label>איזור בארץ</label><br/>
            <select  {...register("IdErea")}  className="select" >  
                 {Erea.map(x => <option key={x.Name} value={x.Id}>{x.Name}</option>)}
           </select><br/>
            
            
            <input type="number" className="" {...register("IdUser")} value={currentUser.Id}/> 
            <input type="submit" className="button" value="אישור"/>
        </form>
        </>);
}








