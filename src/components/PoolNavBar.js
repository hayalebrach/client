import { Link } from "react-router-dom";

export default function PoolNavBar(){
    return (<nav className="nav">

       <Link to="courses" className="navbar-brand">לקורסים</Link>

        <Link to="buyTickets" className="navbar-brand">לרכישת כרטיסים</Link>

        <Link to="about" className="navbar-brand">אודות</Link>
        
        <Link to="ShowSchedule" className="navbar-brand">לוח זמנים</Link>
        </nav>)
}