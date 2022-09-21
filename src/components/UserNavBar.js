import{Link} from "react-router-dom";

export default function UserNavBar(){
    return <nav className="nav">
    
        <Link to="profile" className="navbar-brand">לפרופיל האישי</Link>
        <Link to="managerEntery" className="navbar-brand">יציאה</Link>

    
    </nav>
}