import { useRef } from "react";
import { connect } from "react-redux";
import {signIn} from "../store/Actions/Users";
import "./App.css";



const SignIn=()=>{
    let nameInput = useRef(null);
    let passwordInput = useRef(null);
    let EmailInput = useRef(null);
    let StreetInput = useRef(null);
    let CityInput = useRef(null);
    let HouseNumInput = useRef(null);
    let PhoneInput = useRef(null);
    let Type= useRef(null);
    let Authorization = useRef(null);
    

    return (<>

    
        <h2 >הרשמה</h2>
        <input type="text" placeholder="שם משתמש" className="input" ref={nameInput}  ></input>
        <input type="password" placeholder="סיסמא" className="input" ref={passwordInput}  ></input>
        <input type="email" placeholder="מייל" className="input" ref={EmailInput}></input>
        <input type="text" placeholder="עיר" className="input" ref={StreetInput}  ></input>
        <input type="text" placeholder="רחוב"className="input"  ref={CityInput} ></input>
        <input type="number" placeholder="מפר בית" className="input" ref={HouseNumInput}  ></input>
        <input type="text" placeholder="טלפון" className="input" ref={PhoneInput}></input>
        <input type="number" placeholder="סטטוס" className="input" ref={Authorization}></input>
        <input type="number" placeholder="זכר/נקבה"className="input"  ref={Type} ></input>

        

        <input type="button" value="הרשם"  className="button"  onClick={() => {
                nameInput.current.value="";
                passwordInput.current.value="";
                EmailInput.current.value="";
                StreetInput.current.value="";
                CityInput.current.value="";
                HouseNumInput.current.value="";
                PhoneInput.current.value="";
                Authorization.current.value="";
                Type.current.value="";

                {alert("נרשם בהצלחה!")}
                
                
        }}></input>
        

        
        
        
    </>)

}

export default SignIn;
// export default connect(null, { signIn })(SignIn);