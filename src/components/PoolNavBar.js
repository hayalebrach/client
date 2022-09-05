import { Link } from "react-router-dom";

export default function UserNavBar(){
    return <nav className="nav">

    
       <Link to="courses" className="navbar-brand">לקורסים</Link>

        <Link to="buyTickets" className="navbar-brand">לרכישת כרטיסים</Link>

        <Link to="about" className="navbar-brand">אודות</Link>
        </nav>
}