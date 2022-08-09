import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddManager} from "../../store/Actions/Manager";

const schema = yup.object({
    Name: yup.string().required(),
    mail: yup.string().email().required(),
    Phone: yup.number().positive().integer().required(),
}).required();

export default function AddDetailsManager() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) =>{     
        AddManager(data);
        console.log(data);
   }
    return (<>
                 <h1>AddDetailsManager</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="Name" lablName="שם" className="" type="text"/>
            <Input register={register} errors={errors} name="Phone" lablName="טלפון" className="" type="number" />
            <Input register={register} errors={errors} name="mail" lablName="מייל" className="" type="text"/>
            <input type="submit"/>
        </form>
        </>);
}






