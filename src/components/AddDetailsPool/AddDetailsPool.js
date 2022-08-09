import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddPool} from "../../store/Actions/Pools"
const schema = yup.object({
    NamePool: yup.string().required(),  
    Erea:yup.string().required(), 
    Adress: yup.string().required(), 
    Price: yup.number().positive().integer().required(),
    numPeople: yup.number().positive().integer().required(),
    Phone: yup.number().positive().integer().required()
}).required();

export default function AddDetailsPool() {
    const arr = [{ Id: 1, Name: "מרכז" }, { Id: 2, Name: "צפון" },{ Id:3, Name: "דרום" }]

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        data.Erea=arr[data.Erea-1].Name; 
        AddPool(data);
        console.log(data);
    }
    return (<>
                 <h1>AddDetailsPool</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="NamePool" lablName="שם הבריכה" className="" type="text"/>
           <label>איזור בארץ</label><br/>
            <select  {...register("Erea")}>  
                 {arr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
            <Input register={register} errors={errors} name="Adress" lablName="כתובת" className="" type="text"/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר ליחיד" className="" type="number"/>
            <Input register={register} errors={errors} name="numPeople" lablName="מס' אנשים" className="" type="number"/>
            <Input register={register} errors={errors} name="Phone" lablName="טלפון" className="" type="number"/>
            <input type="submit" onClick={()=>alert("AddDetailsPool")}/>
        </form>
        </>);
}








