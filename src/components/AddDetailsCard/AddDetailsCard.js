import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddCard} from "../../store/Actions/Card"

const schema = yup.object({
    Price: yup.number().positive().integer().required(),
    Amount: yup.number().positive().integer().required()
}).required();

export default function AddDetailsCard() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        AddCard(data);
        console.log(data);
    }

    return (<>
                 <h1>AddDetailsCard</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="" type="number"/>
            <Input register={register} errors={errors} name="Amount" lablName="כמות כניסות" className="" type="number" />
            <input type="submit" onClick={()=>alert("AddDetailsCard")}/>
        </form>
        </>);
}






