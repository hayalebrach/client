import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import "./AddDetailsPool.css";
import * as yup from "yup";
import {AddIImagePool,getAllErea,getAllAreas,AddPool,SavePool,AddErea,getErea, updatePool} from "../../store/Actions/Pools";
import {AddCard} from "../../store/Actions/Card";
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
    Phone: yup.number().positive().integer().required("זהו שדה חובה")
}).required();
export default function AddDetailsPool() {
    const nav = useNavigate();
    const [Id, setId] = useState(null);
    const dispatch = useDispatch();

    let [erea,SetErea]=useState([]);
    useEffect(() => {
        dispatch(getAllAreas());
        getErea().then(x=>SetErea(x.data));
        console.log(erea);     
      }, [erea]);

 const {currentUser,poolsArr,currentPool} = useSelector(state => ({
     currentUser: state.currentUser,
     poolsArr:state.poolsArr,
     currentPool:state.currentPool
  }), shallowEqual);

    console.log(currentUser.Id);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
   const [f,Setf]=useState("false");
   const [Name,SetName]=useState();
   const change=(e)=>{
       SetName(e.target.value);
       console.log(Name);
   }
    const onSubmit = (data) => {
    AddPool(data)
    .then(x => {
    setId(x.data.Id);
    alert("id", Id);
    alert("בריכה נוספה בהצלחה");
});
// let pool = poolsArr.find(x => x.IdUser === currentUser.Id);
// console.log(data);
// nav("/MainManagerNavBar");
        let pool=poolsArr.find(x=>x.IdUser==currentUser.Id);
        dispatch(SavePool(pool));
        console.log(data);
        AddCard({IdPool:currentPool.Id,EntersAmount:1,Price:data.Price,Status:true});
        nav("/MainManagerNavBar");
        
    }
    const AddNewErea=()=>{
        Setf("true");
        console.log(Name);
        AddErea({Name:Name});
    }
   
    return (<>
                 <h1>הוספת פרטי הבריכה</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formDivSignUp" >
            <Input register={register} errors={errors} name="Name" lablName="שם הבריכה" className="inputLogin" type="text"/>
            <Input register={register} errors={errors} name="Adress" lablName="כתובת" className="inputLogin" type="text"/>
            <Input register={register} errors={errors} name="Price" lablName="מחיר ליחיד" className="inputLogin" type="number"/>
            <Input register={register} errors={errors} name="Amount" lablName="מס' אנשים" className="inputLogin" type="number"/>
            <Input register={register} errors={errors} name="Phone" lablName="טלפון" className="inputLogin" type="number"/>
            <Input register={register} errors={errors} name="Pic" lablName="תמונה" className="inputLogin" type="file"/>
      
           <label>מיקום</label><br/>
           <select  {...register("IdErea")}  className="select" >  
                 {erea.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
           </select><br/>

        {f=="false"?<>
         <input type="text" placeholder="מקום אחר"  className="inputLogin" onChange={change}/>
         <input type="button" value="הוספת מקום אחר"  className="submitLogin"onClick={()=>AddNewErea()}/><br/>
        </>:null}
           
            <input type="submit" className="submitLogin" value="אישור"/>
            </div>
        </form>
         {Id ?<AddImage Id={Id}/> :null}
        
    </>);
}








