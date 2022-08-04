import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "./Input";
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    mail: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    passwords: yup.number()
}).required();

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="firsName" lablName="שם פרטי" />
            <Input register={register} errors={errors} name="age" lablName="גיל" />
            <Input register={register} errors={errors} name="mail" lablName="מייל" />
            <input type="submit" />
        </form>
    );
}






