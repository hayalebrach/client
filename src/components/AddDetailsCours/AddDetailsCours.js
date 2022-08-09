import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddCours} from "../../store/Actions/Cours";

const schema = yup.object({
    NameCours: yup.string().required(),
    Dis: yup.string().required(),
    Type:yup.string().required(),
//ימים 
    startHour: yup.number().positive().integer().required(),
    endHour: yup.number().positive().integer().required(),
    numPeople: yup.number().positive().integer().required(),
    Price: yup.number().positive().integer().required()
}).required();

export default function AddDetailsCours() {

    const arr=[{Id:1,Name:"ראשון"},{Id:2,Name:"שני"},{Id:3,Name:"שלישי"},{Id:4,Name:"רביעי"},{Id:5,Name:"חמישי"}];

    const arr2 = [{ Id: 1, Name: "נשים" }, { Id: 2, Name: "גברים" }];


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        data.Type=arr[data.Type-1].Name; 
        AddCours(data);
        console.log(data);
    }

    return (<>
                 <h1>AddDetailsCard</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="NameCours" lablName="שם הקורס" className="" type="text"/>
            <Input register={register} errors={errors} name="Dis" lablName="תיאור" className="" type="text" />
            <label>מגזר</label><br/>
            <select  {...register("Type")}>  
                 {arr2.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>

            <label>ימים</label>
            {arr.map(x=><><br/><label>{x.Name}</label><input type="checkbox" key={x.Id} value={x.Id}/></>)}
             <br/>
            <Input register={register} errors={errors} name="startHour" lablName="שעת התחלה" className="" type="number"/>
            <Input register={register} errors={errors} name="endHour" lablName="שעת סיום" className="" type="number"/>
            <Input register={register} errors={errors} name="numPeople" lablName="מס' אנשים" className="" type="number"/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="" type="number"/>
            <input type="submit" onClick={()=>alert("AddDetailsCours")}/>
        </form>
        </>);
}






