import * as React from 'react';
import{Link, useNavigate} from "react-router-dom";

import "./App.css";
import"./ManagerNavBar.css";


export default function ManagerNavBar(){
     const nav=useNavigate();
    return (<><nav  className="navbar navbar-default">

    
        <Link to="AllUsers" className="navbar-brand">לקוחות בריכה</Link>
        <Link to="BuyTickets" className="navbar-brand">כרטיסים</Link>
        <Link to="Courses" className="navbar-brand">קורסים</Link>
        {/* <Link to="addSale" className="navbar-brand">להוספת מבצעים </Link> */}
        <Link to="AddDetailsSchedule" className="navbar-brand">זמני בריכה</Link>
        <Link to="AddDetailsScheduleCours" className="navbar-brand">זמני קורסים</Link>
        <Link to="poolWeb" className="navbar-brand">לבריכה שלי</Link>

    </nav>
    </>)
}