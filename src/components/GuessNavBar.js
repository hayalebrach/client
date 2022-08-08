import{Link} from "react-router-dom";
import "./App.css";
export default function GuessNavBar(){
    return <nav className="navbar navbar-default" >
   <Link to="home" className="navbar-brand"> לבריכות</Link>
   <Link to="ManagerNavBar" className="navbar-brand">לבריכה שלי!!!</Link>
   <Link to="AddPool" className="navbar-brand">הוספת בריכה</Link>
   <Link to="managerEntery" className="navbar-brand"> כניסת מנהל ראשי</Link>        
    </nav>
}