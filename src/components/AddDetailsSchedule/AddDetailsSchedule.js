import {React,useEffect,useState}  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {getAllDays,AddToArraySchedule}from "../../store/Actions/Pools"
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import ShowSchedule from "./ShowSchedule";
const schema = yup.object({
    StartHour: yup.number().positive().integer().required(),
    EndHour: yup.number().positive().integer().required(),
    Type:yup.number().positive().integer().required(),
    IdDays:yup.number().positive().integer().required(),
    IdPool:yup.number().positive().integer().required()
}).required();

export default function AddDetailsSchedule(){

    let [schedule,Setschedule]=useState([
        //{StartHour:0,EndHour:0,Type:"",IdDays:"",IdPool:""}
    ]);
    
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDays());
    }, []) 
    const { Days, currentPool ,Schedule} = useSelector(state => ({
        Days: state.Days,
        currentPool: state.currentPool,
        Schedule:state.Schedule
     }), shallowEqual);

    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const validator = e => {
        e.preventDefault();}
   
    
    const onSubmit=(data)=>{
       dispatch(AddToArraySchedule(data));
       
    }
    return (
        <>
        <h1>AddDetailsSchedule</h1>
        <h2>הוספת לוח זמנים של הבריכה</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <Input register={register} errors={errors} name="StartHour" lablName="שעת התחלה" className="" type="number" onChange={validator}/>
            <Input register={register} errors={errors} name="EndHour" lablName="שעת סיום" className="" type="number" onChange={validator}/>
            <label>מגזר</label><br/>
            <select  {...register("Type")}  className="select" onChange={validator}>  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>
           <label>יום</label><br/>
            <select  {...register("IdDays")}  className="select"onChange={validator} >  
                 {Days.map(x => <option key={x.TypeUser} value={x.Id}>{x.NameDay}</option>)}
           </select><br/>
           <input type="number" className="" {...register("IdPool")} value={currentPool.Id} onChange={validator} /> <br/>
            <input type="submit" value="הוסף"/>
            
        </form>
        <div className="ShowSchedule">
        <ShowSchedule Schedule={Schedule}/>
        </div>
        </>
        //לכל הוספה יש לכלול מין ,שעת התחלה,שעת סיום

    )
    }
