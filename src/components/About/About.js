
import { useSelector } from "react-redux";
import "./About.css"
export default function About(){

    const currentPool=useSelector(state =>state.currentPool);
    return(<>
        <h1 className="about">מידע ופרטים נוספים</h1>
        <h3 className="about">תיאור הפעילות:</h3>
        {/* להוסיף אבאוט לבריכה בדאטאבייס */}
        {currentPool.About}

       
        </>
        
    )
}