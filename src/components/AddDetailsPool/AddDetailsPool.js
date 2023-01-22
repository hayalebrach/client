import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import "./AddDetailsPool.css"
import * as yup from "yup";
import {getTheGuid,getAllUsers} from "../../store/Actions/Users";
import { getAllErea, AddPool, SavePool,AddIImagePool,updatePool,getErea, getAllAreas,AddErea } from "../../store/Actions/Pools";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import AddImage from "./addImage";
const schema = yup.object({
    IdUser:yup.number(),
    Name: yup.string().required("זהו שדה חובה"),  
    IdErea:yup.number(),
    Adress: yup.string().required("זהו שדה חובה"), 
    Price: yup.number().positive().integer().required("זהו שדה חובה"),
    Amount: yup.number().positive().integer().required("זהו שדה חובה"),
    Phone: yup.number().positive().integer().required("זהו שדה חובה"),
    Dis: yup.string().required("זהו שדה חובה"),  
}).required();

export default function AddDetailsPool() {
    const nav = useNavigate();
    const [Id, setId] = useState(null);

    const dispatch = useDispatch();
    const { currentUser, poolsArr ,allUsers,currentManager} = useSelector(state => ({
        currentUser: state.currentUser,
        poolsArr: state.poolsArr,
        currentManager:state.currentManager,
        allUsers:state.allUsers
    }), shallowEqual);
       const [f,Setf]=useState("false");
   const [Name,SetName]=useState();
   const change=(e)=>{
       SetName(e.target.value);
       console.log(Name);
   }
   let [erea,Seterea]=useState([]);
   let [m,Setm]=useState();
   useEffect(() => {
       dispatch(getAllUsers());
       dispatch(getAllAreas());
       getErea().then(x=>Seterea(x.data));   
     }, [erea]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        let zlength=allUsers.length-1;
        data.IdUser=allUsers[zlength].Id;
        AddPool(data)
            .then(x => {
                setId(x.data.Id);
                alert("id", Id);
                alert("בריכה נוספה בהצלחה")
            });
       let pool = poolsArr.find(x => x.IdUser === currentUser.Id);
       console.log(data);
        nav("/MainManagerNavBar");
    }

    const AddNewErea=()=>{
        Setf("true");
        console.log(Name);
        AddErea({Name:Name});
    }

      return (<>
        <h1>הוספת פרטי הבריכה</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="formDiv">
            <Input register={register} errors={errors} name="Name" lablName="שם הבריכה" className="inputLogin" type="text" />
            <Input register={register} errors={errors} name="Dis" lablName="תיאור" className="inputLogin" type="text" />
            <Input register={register} errors={errors} name="Adress" lablName="כתובת" className="inputLogin" type="text" />
            <Input register={register} errors={errors} name="Price" lablName="מחיר ליחיד" className="inputLogin" type="number" />
            <Input register={register} errors={errors} name="Amount" lablName="מס' אנשים" className="inputLogin" type="number" />
            <Input register={register} errors={errors} name="Phone" lablName="טלפון" className="inputLogin" type="number" />


            <label>איזור בארץ</label><br />
            <select  {...register("IdErea")} className="select" >
                {erea.map(x => <option key={x.Name} value={x.Id}>{x.Name}</option>)}
            </select><br />
            {f=="false"?<>
         <input type="text" placeholder="מקום אחר"  className="inputLogin" onChange={change}/>
         <input type="button" value="הוספת מקום אחר"  className="submitLogin"onClick={()=>AddNewErea()}/><br/>
        </>:null}
            <input type="submit" className="button" value="אישור" />
        </form>
         {Id ?<AddImage Id={Id}/> :null}
        
    </>);
}

