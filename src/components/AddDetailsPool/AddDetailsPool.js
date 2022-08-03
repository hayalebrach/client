import { useNavigate } from "react-router";
const AddDetailsPool=()=>{
    let nav=useNavigate();
    let Pool={
        name:"",
        erea:"hhhhh ",
        adress:"",
        price:0,
        MaxP:0,
        phone:0
    }
    const change=(e)=>{
        let { name, type, value } = e.target;
         if (type === "number")
         value = +value;
        Pool[name]=value;
    }
    const Erea=(e)=>{
        alert(e);
        alert(Pool.erea);
        // if(e==1)
        // Pool[erea]="מרכז";
        // if(e==2)
        // Pool[erea]="צפון";
        // if(e==3)
        // Pool[erea]="דרום";

    }
    const Sof=()=>{
        // if(Pool.erea==1)
        // alert()
        alert(Pool.name+" "+Pool.adress+" "+Pool.MaxP);
        //AllManagers.AddManager(Manager);
        nav("/AddPool");
    }
    return (<>
        <h1>AddDetailsPool</h1> 
        <input type="text" placeholder="שם הבריכה" name="name"onChange={change}></input><br/><br/>
        <input type="text" placeholder="כתובת" name="adress"onChange={change}></input><br/><br/>
        <input type="number" placeholder="מחיר לבודד" name="price"onChange={change}></input><br/><br/>
        <input type="number" placeholder="כמות אנשים" name="MaxP"onChange={change}></input><br/><br/>
        <input type="number" placeholder="מספר טלפון" name="phone"onChange={change}></input><br/><br/>
      

        <button onClick={Sof}>סימתי</button>
            </>)
    }
    
export default AddDetailsPool;


