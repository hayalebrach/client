import  { React,useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddCard,getAllCardByIdPool} from "../../store/Actions/Card"
import { useDispatch ,useSelector} from "react-redux";
import { useParams ,useNavigate} from "react-router";


const schema = yup.object({
    Price: yup.number().positive().integer().required(),
    EntersAmount: yup.number().positive().integer().required()
}).required();

export default function AddDetailsCard() {
    const nav=useNavigate();
    const currentPool = useSelector((state) =>state.currentPool);
    let f = useParams();
    useEffect(() => {
      f=f.flag;
    },[]);
    console.log(f.flag);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
   const dispatch=useDispatch();
    const onSubmit = (data) => {
        dispatch(AddCard({...data,IdPool:currentPool.Id}));
        if(f.flag=="true")
           nav("/ManagerNavBar/AllCardsToPool");        
    }

    return (<>
                 <h1>הוספת כרטיסים</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="" type="number"/>
            <Input register={register} errors={errors} name="EntersAmount" lablName="כמות כניסות" className="" type="number" />
            {f.flag=="false"?
            <input type="submit"/>
            :
            <input type="submit" value="הוספה"/>
        }
        </form>
        </>);
}






