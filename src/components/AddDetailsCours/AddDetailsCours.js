import {React,useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {useSelector,shallowEqual,useDispatch} from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddCours} from "../../store/Actions/Cours";
import {AllGuide} from "../../store/Actions/Users";
import {getAllDays} from "../../store/Actions/Pools";
import "./AddDetailsCours.css";
import { useParams ,useNavigate} from "react-router";

const schema = yup.object({
    NameCours: yup.string().required(),
    Dis: yup.string().required(),
    Type:yup.string().required(),
    IdPool:yup.number(),
    Status:yup.bool(),
    PeopleAmount: yup.number().positive().integer().required(),
    Price: yup.number().positive().integer().required(),
    IdUser:yup.number(),
}).required();

export default function AddDetailsCours() {
    const nav=useNavigate();
    const dispatch = useDispatch();
    const [Guide,SetGuide]=useState();
    let f = useParams();
    useEffect(() => {
        AllGuide().then(x=>SetGuide(x.data));
      f=f.flag;

    },[Guide]);
    console.log(f.flag);

    const {currentPool} = useSelector(state => ({
        currentPool: state.currentPool
    }), shallowEqual);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        //data.typeArr=typeArr[data.typeArr-1].Name; 
       
        //dispatch(AddCours({IdPool:currentPool.Id,NameCours:data.NameCours,PeopleAmount:data.PeopleAmount,Dis:data.Dis,IdUser:currentUser.Id}));
        
    }
    

    return (<>
                 <h1>AddDetailsCourse</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="MyDiv">
            <Input register={register} errors={errors} name="NameCours" lablName="שם הקורס" className="input1" type="text"/>
            <Input register={register} errors={errors} name="Dis" lablName="תיאור" className="input1" type="text" />
            <Input register={register} errors={errors} name="PeopleAmount" lablName="מס' אנשים" className="input1" type="number"/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="input1" type="number"/>
            <label>שם המדריך</label><br />
            <select  {...register("IdDays")} className="select" >
                {Guide.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
            </select><br />
            </div>
            {f.flag=="false"?
            <input type="submit"/>
            :
            <input type="submit" value="הוספה"/>
        }
        </form>
        </>);
}

