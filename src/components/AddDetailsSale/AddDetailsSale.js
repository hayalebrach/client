import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import { AddSale } from "../../store/Actions/Card"
import { useDispatch } from "react-redux";
const schema = yup.object({
    Name: yup.string().required(),
    Dis: yup.string().required(),
    dateStart: yup.number().positive().integer().required(),
    dateEnd: yup.number().positive().integer().required(),
    numEnter: yup.number().positive().integer().required(),
    Price: yup.number().positive().integer().required()
}).required();

export default function AddDetailsSale() {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        dispatch(AddSale(data));
        console.log(data);
    }

    return (<>
        <h1>AddDetailsCard</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="Name" lablName="כותרת" className="" type="text" />
            <Input register={register} errors={errors} name="Dis" lablName="תיאור" className="" type="text" />
            <Input register={register} errors={errors} name="dateStart" lablName="תאריך התחלה" className="" type="number" />
            <Input register={register} errors={errors} name="dateEnd" lablName="תאריך סיום" className="" type="number" />
            <Input register={register} errors={errors} name="numEnter" lablName="מס' כניסות" className="" type="number" />
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="" type="number" />
            <input type="submit" onClick={() => alert("AddDetailsSale")} />
        </form>
    </>);
}







