//import { connect } from "react-redux";
//import {addPool} from "../store/Actions/Pools"
import "./AddPool.css"

function AddPool(props){

    let product = {
                 Name:" ",
                 Address:" ",
                 Picture:"",
                 Price:0,
                
            }
let message="";const change=(e)=>{
                let { name, type, value } = e.target;
                if (type === "number")
                     value = +value;
                 if(value == null)
                     message = "יש למלא את כל הפרטים!";
                 else
                    product[name]=value;

}

const addP=(e)=>{
    e.preventDefault();
    console.log(product)
    props.addPost(product);
    alert("IM IN XD");

}


return(<>
    <h1>{message}</h1>
    <form onSubmit={addP}>

      <input type="text"   placeholder="שם בריכה" className="input" onChange={change} name="Name"  ></input>
      <input type="text"   placeholder="כתובת" className="input"  onChange={change} name="Address"  ></input>
      <input type="text"   placeholder="תמונה"className="input"  onChange={change}  name="Picture" ></input>
      <input type="number" placeholder=" מחיר לכרטיס "className="input" onChange={change}    name="Price" ></input>
      <input type="submit" value="הוסף"  className="button" ></input>
      </form>
    </>);
    }
    

export default AddPool;

//export default connect(null,{addPool})(AddPool);