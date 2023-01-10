import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import { AddSale } from "../../store/Actions/Card"
import { useDispatch } from "react-redux";
const schema = yup.object({
    
    Dis: yup.string().required(),
    StartDate: yup.string().required(),
    EndDate: yup.string().required(),
    EnterAmount: yup.number().positive().integer().required(),
    Price: yup.number().positive().integer().required()
}).required();

export default function AddDetailsSale() {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {

        console.log(data);
    }

    return (<>
        <h1>AddDetailsCard</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <Input register={register} errors={errors} name="Dis" lablName="תיאור" className="" type="text" />
            <Input register={register} errors={errors} name="StartDate" lablName="תאריך התחלה" className="" type="text" />
            <Input register={register} errors={errors} name="EndDate" lablName="תאריך סיום" className="" type="text" />
            <Input register={register} errors={errors} name="EnterAmount" lablName="מס' כניסות" className="" type="number" />
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="" type="number" />
            <input type="submit" />
        </form>
    </>);
}







