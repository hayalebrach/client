import { useRef } from "react";
// import {  connect } from "react-redux";
// import { login } from '../store/Actions/Users'
import "./App.css";
import { useNavigate } from "react-router";


    
const Login = () => {

    let nav=useNavigate();
     let product={};  
    const change=(e)=>{
           let { name, type, value } = e.target;
           if (type === "number")
                value = +value;
           
        product[name]=value;
    }
    
    const checkManag=()=>{

         if(product.password==0)
         nav("/UserNavBar");
    
    }

    let nameInput = useRef(null);
    let passwordInput = useRef(null);


    return (<>
        <h2>התחברות</h2>
        <input type="text"  className="input"placeholder="שם משתמש" ></input>
        <input type="text" className="input"  placeholder="סיסמא" name="password" onChange={change}   ></input>
        <input type="button" className="button" value="הכנס"  onClick={checkManag}
          
         ></input>
    </>)
    }
    export default  Login;
//  export default connect(null, { login })(Login);




// const mapStata=state=>{
//     return{
//         user: state.user,
//         list: state.list
//     }
// }
// export default connect(mapStata, { login })(Login);
