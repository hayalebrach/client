import{Link} from "react-router-dom";
import '../AddPool/AddPool.css'
export default function AddPool(){
    return (<>
    <h1 className="h1">AddPool</h1>
 <ul className="nav flex-column">
  <li className="nav-item">
  <Link to="AddDetailsManager" className="nav-link">הוספת מנהל בריכה</Link>
  </li>
  <li className="nav-item">
  <Link to="AddDetailsPool" className="nav-link">הוספת בריכה</Link>
  </li>
</ul>
    </>)
}