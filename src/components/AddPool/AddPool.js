import{Link} from "react-router-dom";
import '../AddPool/AddPool.css'
export default function AddPool(){
    return (<>
    <h1 className="h1">AddPool</h1>
 <ul className="nav flex-column">
  <li className="nav-item">
  <Link to="AddDetailsManager" className="nav-link">להוספת המנהל</Link>
  </li>
  <li className="nav-item">
  <Link to="AddDetailsSchedule" className="nav-link">לפרטי לוח זמנים</Link>
  </li>
  <li className="nav-item">
  <Link to="AddDetailsPool" className="nav-link">לפרטי הבריכה</Link>
  </li>
  <li className="nav-item">
  <Link to="AddDetailsCours" className="nav-link">לפרטי הקורסים</Link>
  </li>
  <li className="nav-item">
  <Link to="AddDetailsCard" className="nav-link">לפרטי הכרטיסים</Link>  
  </li>
  <li className="nav-item">
  <Link to="AddDetailsSale" className="nav-link">להוספת מבצעים</Link>  
  </li>
</ul>
    </>)
}