import{Link} from "react-router-dom";
import "./App.css";
export default function GuessNavBar(){
    return <nav className="navbar navbar-default" >
    
   <Link to="login" className="navbar-brand">התחברות</Link>
   <Link to="signIn" className="navbar-brand" >הרשמה</Link>
   <Link to="home" className="navbar-brand"> לבריכות</Link>
   <Link to="managerEntery" className="navbar-brand">כניסה למפרסמים</Link>
   <Link to="managerEntery" className="navbar-brand"> כניסת מנהל ראשי</Link>
         
          
          
          
          
         
    </nav>
}