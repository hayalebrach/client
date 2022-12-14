import{ React,useEffect,useState}  from "react";
import { useParams,useNavigate } from "react-router";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {updateCours} from "../../store/Actions/Cours";
import {AllGuide} from "../../store/Actions/Users";
import axios from "axios";
import { isNumber } from "axios/lib/utils";

export default function UpdateCours(){
    const dispatch = useDispatch();
    let f = useParams();
    const nav=useNavigate();
    const [Guide,SetGuide]=useState([]);
    useEffect(() => {
        AllGuide().then(x=>SetGuide(x.data));       
        f=f.flag;
    }, [Guide]);

    const {currentCours,courses_arr} = useSelector(state => ({
        currentCours: state.currentCours,
        courses_arr:state.courses_arr
      }), shallowEqual);
     let g=Guide.find(x=>x.Id==currentCours.IdUser);     
     const coursSchema = {
        Id:currentCours.Id,
        IdPool:currentCours.IdPool,
        NameCours:currentCours.NameCours,
        Price:currentCours.Price,
        PeopleAmount:currentCours.PeopleAmount,
        Dis:currentCours.Dis,
        IdUser:currentCours.IdUser,
        Status:currentCours.Status
    }
  
              const change = (e) => {
                const inputName = e.target.name;
                const inputValue = e.target.value;
                coursSchema[inputName] = inputValue;
                console.log(coursSchema[inputName]);
                console.log(coursSchema);
            }
            
            const Send=()=>{
                console.log(coursSchema);
                dispatch(updateCours(coursSchema));
                //dispatch(getAllCardByIdPool(coursSchema.IdPool));
                console.log(courses_arr);
                nav("/ManagerNavBar/AllCoursToPool");
            }
return (<>
    <h1>עדכון</h1>
    <form>
        <div className="div1">

        <label >מחיר</label><br/>
        <input type="number" className="input"  name="Price" placeholder={currentCours.Price} variant="standard" onChange={change} defaultValue={currentCours.Price} disabled={f.flag=="false"}/>
        <label >שם הקורס</label><br/>
        <input type="text" className="input"  name="NameCours" placeholder={currentCours.NameCours} variant="standard" onChange={change} defaultValue={currentCours.NameCours} disabled={f.flag=="false"}/>
        <label >תיאור</label><br/>
        <input type="text" className="input"  name="Dis" placeholder={currentCours.Dis} variant="standard" onChange={change} defaultValue={currentCours.Dis} disabled={f.flag=="false"}/>
        <label >מספר אנשים</label><br/>
        <input type="number" className="input"  name="PeopleAmount" placeholder={currentCours.PeopleAmount} variant="standard" onChange={change} defaultValue={currentCours.PeopleAmount} disabled={f.flag=="false"}/>
      {/* לבדוק איך לעשות את המדריך שיהיה placeholder */}
        <label>מדריך הקורס</label><br/>
        <select className="select" variant="standard" onChange={change} defaultValue={currentCours.IdUser} disabled={f.flag=="false"}>
                {Guide.map(x => <option key={x.Id} value={g.Name}>{x.Name}</option>)}
            </select><br />
        <input type="button" value="עדכון" className="button" onClick={()=>Send()}/></div>
    </form>
    </>
); 
}