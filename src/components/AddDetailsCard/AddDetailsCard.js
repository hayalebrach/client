import  { React,useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddCard} from "../../store/Actions/Card"
import {useSelector} from "react-redux";
import { useParams ,useNavigate} from "react-router";


const schema = yup.object({
    Price: yup.number().positive().integer().required("זהו שדה חובה"),
    EntersAmount: yup.number().positive().integer().required("זהו שדה חובה"),
    IdPool:yup.number(),
    Status:yup.bool()
}).required();

export default function AddDetailsCard() {
    const nav=useNavigate();
    const currentPool = useSelector((state) =>state.currentPool);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        data.IdPool=currentPool.Id;
        data.Status=true;
        console.log(data);
        AddCard(data);
        nav("/ManagerNavBar/BuyTickets");        
       
           
    }

    return (<>
                 <h1>הוספת כרטיסים</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formDiv" ><br/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="inputLogin" type="number"/>
            <Input register={register} errors={errors} name="EntersAmount" lablName="כמות כניסות" className="inputLogin" type="number" />

            <input type="submit" value="הוספה" className="submitLogin"/>
            </div>
        </form>
        </>);
}






