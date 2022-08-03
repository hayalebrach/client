import {useNavigate}from "react-router";
//import {addFunc} from "../AddDetailsCours/Courses";

const AddDetailsCours=(props)=>{
    let nav=useNavigate();
    //const [Managers,SetManagers]=useState([]);

   let Cours={
    name:"",
    dis:" ",
    type:" ",
    day:" ",
    startHour:0,
    endHour:0,
    peopleAmount:0,
    price:0,
    phone:0
   }
   const change=(e)=>{
    let { name, type, value } = e.target;
    if (type === "number")
         value = +value;
 
 Cours[name]=value;
}
const Sof=()=>{
 
    alert(Cours.name+" "+Cours.type+" "+Cours.dis);
    alert("jlhdgjehgk");
        //AllManagers.AddManager(Manager);
    nav("/AddPool");
   // <Courses/>
}
const Again=()=>{
    //this.addFunc(Cours);
    
    // nav("/AddDetailsCours");

}

    return (
        <>
        <h1>AddDetailsCours</h1>
           
        <input type="text" placeholder="שם הקורס" name="name"onChange={change}></input><br/><br/>
        <input type="text" placeholder="תיאור" name="dis"onChange={change}></input><br/><br/>
        <input type="text" placeholder="מגזר" name="type"onChange={change}></input><br/><br/>
        <input type="text" placeholder="ימים:" name="day"onChange={change}></input><br/><br/>
        <input type="number" placeholder="שעת התחלה:" name="hourStart"onChange={change}></input><br/><br/>
        <input type="number" placeholder="שעת סיום:" name="hourEnd"onChange={change}></input><br/><br/>
        <input type="number" placeholder="מס' אנשים" name="MaxP"onChange={change}></input><br/><br/>
        <input type="number" placeholder="מחיר" name="price"onChange={change}></input><br/><br/>
        <button onclick={()=>{props.addFunc(Cours)}}>הוסף</button>
        {/* <button onClick={Again}>להוספת קורס נוסף</button><button onClick={Sof}>סימתי</button> */}
        </>
    )
    }
export default AddDetailsCours;