import {useNavigate}from "react-router";
const AddDetailsCard=()=>{
    let nav=useNavigate();
    let Card={
         price:0,
         Amount:0
    }
    const change=(e)=>{
        let { name, type, value } = e.target;
        if (type === "number")
             value = +value;
     
     Card[name]=value;
    }
    let Sof=()=>{
        alert("נוסף בהצלחה");
        nav("/AddPool");
    }
return (
    <>
    <h1>AddDetailsCard</h1>
    <input type="number" placeholder="מחיר:" name="price" onChange={change}></input><br/><br/>
    <input type="number" placeholder="כמות כניסות:" name="Amount" onChange={change}></input><br/><br/>
    <button onClick={Sof}>הוסף</button>
    </>
)
}
export default AddDetailsCard;