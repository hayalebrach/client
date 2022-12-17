import * as React from 'react';
import{Link} from "react-router-dom";

import "./App.css";
import"./ManagerNavBar.css";


export default function ManagerNavBar(){
 
    return (<><nav  className="navbar navbar-default">

    
        <Link to="AllUsers" className="navbar-brand">צפייה בלקוחות  </Link>
        <Link to="AllCardsToPool" className="navbar-brand">לצפיה ועדכון הכרטיסים</Link>
        <Link to="AllCoursToPool" className="navbar-brand">לצפיה עדכון הקורסים</Link>
        <Link to="addSale" className="navbar-brand">להוספת מבצעים </Link>
        {/* <Link to="courses" className="navbar-brand">לקורסים</Link> */}
        <Link to="AddDetailsSchedule" className="navbar-brand">לצפיה בזמני בריכה</Link>
        
      





  


    
 



        


    
    </nav>
    </>)
}