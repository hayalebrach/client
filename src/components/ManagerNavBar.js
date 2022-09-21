import{ React}  from "react";
import{Link} from "react-router-dom";
import "./App.css";

export default function ManagerNavBar(){
    return <nav  className="navbar navbar-default">

    
        <Link to="users" className="navbar-brand">צפייה בלקוחות  </Link>
        <Link to="AllCardsToPool" className="navbar-brand">לצפיה ועדכון הכרטיסים</Link>
        <Link to="courseUpdate" className="navbar-brand">לעדכון הקורסים  </Link>
        <Link to="addSale" className="navbar-brand">להוספת מבצעים </Link>
        <Link to="addCourse" className="navbar-brand">להוספת קורס </Link>
        
    
    </nav>
}