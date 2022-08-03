import { useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { FAKElogin } from "../../store/Actions/Users";


    
const Login = (props) => {
    
    let nameInput = useRef(null);
    let passwordInput = useRef(null);

    let nav=useNavigate();
     let product={};  
    const change=(e)=>{
           let { name, type, value } = e.target;
           if (type === "number")
                value =+value;
           
        product[name]=value;
    }
    
    const checkManag=()=>{
         if(product.password==0)
         //props.FAKElogin({ UserName: nameInput.current.value, Password: passwordInput.current.value })
         nav("/UserNavBar");
    
    }

    return (<>
    
        <h2>התחברות</h2>
        
        
        <input type="text"  className="input"placeholder="שם משתמש" ></input>
        <input type="text" className="input"  placeholder="סיסמא" name="password" onChange={change}   ></input>
        <input type="button" className="button" value="הכנס"   onClick={checkManag}
          
         ></input>
    </>)
    }
    
    export default  Login;

    // export default  connect(null,{FAKElogin})(Login);

