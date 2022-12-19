import * as React from 'react';
import{Link} from "react-router-dom";

import "./App.css";
import"./ManagerNavBar.css";


export default function ManagerNavBar(){
 
    return (<><nav  className="navbar navbar-default">

    
        <Link to="AllUsers" className="navbar-brand">לקוחות בריכה</Link>
        <Link to="AllCardsToPool" className="navbar-brand">כרטיסים</Link>
        <Link to="AllCoursToPool" className="navbar-brand">קורסים</Link>
        <Link to="addSale" className="navbar-brand">להוספת מבצעים </Link>
        <Link to="AddDetailsSchedule" className="navbar-brand">זמני בריכה</Link>

    </nav>
    </>)
}