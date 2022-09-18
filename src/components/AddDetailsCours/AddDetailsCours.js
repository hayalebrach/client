import React  from "react";
import { useForm } from "react-hook-form";
import {useSelector,shallowEqual,useDispatch} from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import {AddCours} from "../../store/Actions/Cours";

const schema = yup.object({
    NameCours: yup.string().required(),
    Dis: yup.string().required(),
    Type:yup.string().required(),
//ימים
    PeopleAmount: yup.number().positive().integer().required(),
    Price: yup.number().positive().integer().required()
}).required();

export default function AddDetailsCours() {
    const Courses=useSelector(state =>state.Courses);
    const currentPool=useSelector(state =>state.currentPool);
    const currentUser=useSelector(state =>state.currentUser);
    const dispatch = useDispatch();
    // const user=useSelector(state=>:state.user))

// const {user,cu}=useSelector(state=>({user:state.user,cu:state.cu}),shallowEqual)
    const days=[{Id:1,Name:"ראשון"},{Id:2,Name:"שני"},{Id:3,Name:"שלישי"},{Id:4,Name:"רביעי"},{Id:5,Name:"חמישי"}];

    const typeArr = [{ Id: 1, Name: "אישה" }, { Id: 2, Name: "גבר" }];


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        //data.typeArr=typeArr[data.typeArr-1].Name; 
        alert(data.NameCours);
        dispatch(AddCours({IdPool:currentPool.Id,NameCours:data.NameCours,PeopleAmount:data.PeopleAmount,Dis:data.Dis,IdUser:currentUser.Id})) 
        console.log(data);
    }
    

    return (<>
                 <h1>AddDetailsCourse</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} errors={errors} name="NameCours" lablName="שם הקורס" className="" type="text"/>
            <Input register={register} errors={errors} name="Dis" lablName="תיאור" className="" type="text" />
            <label>מגזר</label><br/>
            <select  {...register("Type")}>  
                 {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>

            <label>ימים</label>
            {days.map(x=><><br/><label>{x.Name}</label><input type="checkbox" key={x.Id} value={x.Id}/><br/><input type="number"placeholder="שעה"/></>)}
             <br/>
            <Input register={register} errors={errors} name="startHour" lablName="שעת התחלה" className="" type="number"/>
            <Input register={register} errors={errors} name="endHour" lablName="שעת סיום" className="" type="number"/>
            <Input register={register} errors={errors} name="PeopleAmount" lablName="מס' אנשים" className="" type="number"/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר" className="" type="number"/>
            <input type="submit" />
        </form>
        </>);
}






