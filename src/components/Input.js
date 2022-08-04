import React, { Fragment } from "react";
const Input = ({ register, errors, name, lablName, className, type }) => {
    return <Fragment>
        <label >{lablName} </label>
        <input type={type} className={className} {...register(name)} />
        <p>{errors[name]?.message}</p>
    </Fragment>
}
export default Input;