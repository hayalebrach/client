import{Link} from "react-router-dom";
import "./App.css";
export default function ManagerNavBar(){
    return <nav  className="navbar navbar-default">

    
        <Link to="users" className="navbar-brand">צפייה בלקוחות  </Link>
        <Link to="cardUpdate" className="navbar-brand">לעדכון הכרטיסיה  </Link>
        <Link to="courseUpdate" className="navbar-brand">לעדכון הקורסים  </Link>
        <Link to="addSale" className="navbar-brand">להוספת מבצעים </Link>
        
    
    </nav>
}