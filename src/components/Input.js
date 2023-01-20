import React, { Fragment } from "react";
import "./input.css"
const Input = ({ register, errors, name, lablName, className, type,src,id,c }) => {
    return <Fragment>
        <img src={src} alt="" id={id} className={c}></img>
        <input  type={type} className={className}  placeholder={lablName} {...register(name) } />
        <p>{errors[name]?.message}</p>
        
    </Fragment>
}
export default Input;
