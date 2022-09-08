import{Link} from "react-router-dom";
import "./App.css"
export default function ManagerNavBar(){
    return <nav>
        <Link to="AddPool" className="navbar-brand">הוספת בריכה</Link>
        <Link to="managers" className="navbar-brand">לרשימת המנהלים  </Link>
        <Link to="home" className="navbar-brand">לרשימת הבריכות  </Link>

    </nav>
}