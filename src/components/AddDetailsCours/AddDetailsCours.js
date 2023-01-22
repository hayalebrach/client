import {React,useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {useSelector,shallowEqual,useDispatch} from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddCours,GetAllCoursesByPool} from "../../store/Actions/Cours";
import {AllGuide} from "../../store/Actions/Users";
import "./AddDetailsCours.css";
import { useParams ,useNavigate} from "react-router";

const schema = yup.object({
    NameCours: yup.string("זהו שדה חובה").required("זהו שדה חובה"),
    Dis: yup.string("זהו שדה חובה").required("זהו שדה חובה"),
    IdPool:yup.number(),
    Status:yup.bool(),
    PeopleAmount: yup.number("זהו שדה חובה").positive("זהו שדה חובה").integer("זהו שדה חובה").required("זהו שדה חובה"),
    Price: yup.number("זהו שדה חובה").positive("זהו שדה חובה").integer("זהו שדה חובה").required("זהו שדה חובה"),
    IdUser:yup.number(),
    IdPic:yup.number(),
}).required();

export default function AddDetailsCours() {
    const nav=useNavigate();
    const dispatch = useDispatch();
    
    const {currentPool,Guide} = useSelector(state => ({
        currentPool: state.currentPool,
        Guide:state.Guide,
    }), shallowEqual);
    useEffect(() => {
        if(currentPool!=null)
           dispatch(AllGuide(currentPool.Id));
    },[Guide]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        data.IdPool=currentPool.Id;
        data.Status=true;
        AddCours(data).then();
        dispatch(GetAllCoursesByPool(currentPool.Id));
        nav("/ManagerNavBar/Courses"); 

    }

    const handleChange = (e) => {
        
         }
        
    return (<>
                 <h1>AddDetailsCourse</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formDiv">
            <Input register={register} errors={errors} name="NameCours" lablName="שם הקורס" className="inputLogin" type="text"/>
            <Input register={register} errors={errors} name="Dis" lablName="תיאור" className="inputLogin" type="text" />
            <Input register={register} errors={errors} name="PeopleAmount" lablName="מס' אנשים" className="inputLogin" type="number"/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="inputLogin" type="number"/>
            <label>שם המדריך</label><br />
            <select  {...register("IdUser")} className="select" >
                {Guide.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}

            </select><br /><br/>
             <input value="הוספת מדריך חדש" type="button"  onClick={()=>nav("/SignUp")}/>
            <input type="submit" value="הוספה" className="submitLogin"/>
         

           
            <input  accept="image/*" type="file"  onChange={handleChange}/>
            <input type="submit" value="הוספה"/>
</div>
        </form>
        </>);
}

