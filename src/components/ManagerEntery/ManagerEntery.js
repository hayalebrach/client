import "./ManagerEntery.css"
import { useNavigate } from "react-router";

const ManagerEntery=()=>{
  
let nav=useNavigate();

    let product = {};
          
   
const change=(e)=>{
       let { name, type, value } = e.target;
       if (type === "number")
            value = +value;
       
    product[name]=value;
}

const checkManag=()=>{
    
     if(product.password==1)
     nav("/ManagerNavBar");

     if(product.password==2)
     nav("/MainManagerNavBar");
     

}

 
    return(<>
    <h1> כניסת מנהל </h1>
    <input type="text" className="input" placeholder="שם" ></input>
    <input type="text" className="input" placeholder="סיסמא" name="password" onChange={change}></input>
    <input type="button" className="button" value="הכנס" onClick={checkManag} ></input>

    
    </>)

}
export default ManagerEntery ;