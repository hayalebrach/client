import{Link} from "react-router-dom";
import "./App.css"
export default function MainManagerNavBar(){
    return <nav>
        <Link to="AddDetailsManager" className="navbar-brand">הוספת בריכה</Link>
        <Link to="AllManagers" className="navbar-brand"> לרשימת המשתמשים  </Link>
        <Link to="AllPools" className="navbar-brand">לרשימת הבריכות  </Link>

    </nav>
}