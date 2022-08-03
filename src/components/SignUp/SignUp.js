import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import "./SignUp.css"


const SignUp=()=>{

    let nav=useNavigate();
    let nameInput = useRef(null);
    let passwordInput = useRef(null);
    let EmailInput = useRef(null);
    let StreetInput = useRef(null);
    let CityInput = useRef(null);
    let HouseNumInput = useRef(null);
    let PhoneInput = useRef(null);
    let Type= useRef(null);
    let Authorization = useRef(null);
    
    if(HouseNumInput==null)
    alert("tttttttttt");

    return (<>

    
        <h2 >הרשמה</h2>
        
        <input type="text" placeholder="שם משתמש" className="input1" ref={nameInput}  ></input>
        <input type="password" placeholder="סיסמא" className="input1" ref={passwordInput}  ></input>
        <input type="email" placeholder="מייל" className="input1" ref={EmailInput}></input>
        <input type="text" placeholder="עיר" className="input1" ref={StreetInput}  ></input>
        <input type="text" placeholder="רחוב"className="input1"  ref={CityInput} ></input>
        <input type="number" placeholder="מפר בית" className="input1" ref={HouseNumInput}  ></input>
        <input type="text" placeholder="טלפון" className="input1" ref={PhoneInput}></input>
        <input type="number" placeholder="סטטוס" className="input1" ref={Authorization}></input>
        <input type="number" placeholder="זכר/נקבה"className="input1"  ref={Type} ></input>

        

        <input type="button" value="הרשם"  className="button"  onClick={() => {
            if( nameInput.current.value=="" ||passwordInput.current.value==""
            ||EmailInput.current.value=="" ||  StreetInput.current.value=="" ||  HouseNumInput.current.value==""
            || CityInput.current.value==""||PhoneInput.current.value=="" || Authorization.current.value==""
            || Type.current.value=="")
               alert("יש למלא את כל הפרטים!");

             else
             {
                 alert("נרשם בהצלחה!");
                 nav("/UserNavBar");
              };
        }}></input>
        
    </>)

}

export default SignUp;
// export default connect(null, { signIn })(SignIn);