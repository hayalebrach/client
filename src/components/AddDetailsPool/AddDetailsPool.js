import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import "./AddDetailsPool.css"
import * as yup from "yup";
import { getAllErea, AddPool, SavePool,AddIImagePool,updatePool,getErea, getAllAreas,AddErea } from "../../store/Actions/Pools";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import AddImage from "./addImage";
const schema = yup.object({
    IdUser: yup.number().positive().integer().required(),
    Name: yup.string().required(),
    IdErea: yup.string().required(),
    Adress: yup.string().required(),
    Price: yup.number().positive().integer().required(),
    Amount: yup.number().positive().integer().required(),
    Phone: yup.number().positive().integer().required()
}).required();

export default function AddDetailsPool() {
    const nav = useNavigate();
    const [Id, setId] = useState(null);

    const dispatch = useDispatch();
    const { currentUser, poolsArr } = useSelector(state => ({
        currentUser: state.currentUser,
        poolsArr: state.poolsArr
    }), shallowEqual);

       const [f,Setf]=useState("false");
   const [Name,SetName]=useState();
   const change=(e)=>{
       SetName(e.target.value);
       console.log(Name);
   }
   let [erea,Seterea]=useState([]);

   useEffect(() => {
       dispatch(getAllAreas());
       getErea().then(x=>Seterea(x.data));   
     }, [erea]);

  

    console.log(currentUser.Id);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        AddPool(data)
            .then(x => {
                setId(x.data.Id);
                alert("id", Id);
                alert("בריכה נוספה בהצלחה")
            });
       // let pool = poolsArr.find(x => x.IdUser === currentUser.Id);
       // console.log(data);
        // nav("/MainManagerNavBar");
    }

    const AddNewErea=()=>{
        Setf("true");
        console.log(Name);
        AddErea({Name:Name});
    }

      return (<>
        <h1>הוספת פרטי הבריכה</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="formDivPool">
            <Input register={register} errors={errors} name="Name" lablName="שם הבריכה" className="inputAddPool" type="text" />
            <Input register={register} errors={errors} name="Adress" lablName="כתובת" className="inputAddPool" type="text" />
            <Input register={register} errors={errors} name="Price" lablName="מחיר ליחיד" className="inputAddPool" type="number" />
            <Input register={register} errors={errors} name="Amount" lablName="מס' אנשים" className="inputAddPool" type="number" />
            <Input register={register} errors={errors} name="Phone" lablName="טלפון" className="inputAddPool" type="number" />


            <label>איזור בארץ</label><br />
            <select  {...register("IdErea")} className="select" >
                {erea.map(x => <option key={x.Name} value={x.Id}>{x.Name}</option>)}
            </select><br />
            {f=="false"?<>
          <input type="button" value="הוספת מקום אחר"  className="submitLogin"onClick={()=>AddNewErea()}/><br/><br/>
         <input type="text" placeholder="מקום אחר"  className="inputAddPool" onChange={change}/>
        </>:null}

            <input type="submit" className="button" value="אישור" />
        </form>
         {Id ?<AddImage Id={Id}/> :null}
        
    </>);
}








