import Input from "../Input";
import "./CourseEnrollment.css";
import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import React  from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
const text=()=>{
    document.getElementById("text").style.visibility="visible";
    document.getElementById("text").style.fontSize="25px";
    document.getElementById("div").style.visibility="hidden";
}

const schema = yup.object({
    userName: yup.string().required(),
    mail: yup.string().email().required(),
    phone: yup.number().positive().integer().required()
}).required();


const CourseEnrollment=()=>{
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});
const onSubmit = data => {console.log(data);
text();}
    
    return <>
    <div id="text" className="text">
        <h1>!!!איזה יופיייי</h1>
        <h3>!נרשמת לקורס בהצלחה<br/>
        נשמח לראותך איתנו בקרוב<br/>
        פלאפון של המדריך לפרטים נוספים:0521234565</h3>
        <h3>להלן מערכת השעות: ימים א-ה מ-8:00 בבוקר ועד 15:00 בצהרים לבנים. <br/> ומ-15:00 בצהרים ועד 21:00 לבנות.</h3>

    </div>

    <div className="div" id="div">
        <h1 className="x">:הרשמה לקורס שחיה</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} errors={errors} className="input" name="userName" lablName="שם פרטי" />
        <Input register={register} errors={errors} className="input" name="mail" lablName="מייל "/>
        <Input register={register} errors={errors} className="input" name="phone" lablName="פלאפון"/>
    <input type="submit"  className="button" value="!הרשם"></input>
    </form>
    </div>
    
    
    
    </>


}

export default CourseEnrollment;