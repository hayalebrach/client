import{Link} from "react-router-dom";
import "./App.css";
export default function GuessNavBar(){
    return <nav className="navbar navbar-default" >
   <Link to="AllPools" className="navbar-brand"> לבריכות</Link>
   <Link to="ManagerNavBar" className="navbar-brand">לבריכה שלי!!!</Link>    
    </nav>
}