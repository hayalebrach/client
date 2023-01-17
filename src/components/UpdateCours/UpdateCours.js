import{ React,useEffect,useState}  from "react";
import { useParams,useNavigate } from "react-router";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {updateCours,GetAllCoursesByPool} from "../../store/Actions/Cours";
import {AllGuide} from "../../store/Actions/Users";
import axios from "axios";
import { isNumber } from "axios/lib/utils";
import "../Login/Login.css";
export default function UpdateCours(){
    const dispatch = useDispatch();
    let f = useParams();
    const nav=useNavigate();
    
    useEffect(() => {        
        f=f.flag;
        dispatch(AllGuide());
    }, []);

    const {currentCours,courses_arr, usersArr,Guide} = useSelector(state => ({
        currentCours: state.currentCours,
        courses_arr:state.courses_arr,
        usersArr:state.usersArr,
        Guide:state.Guide
      }), shallowEqual);
     console.log(usersArr);
     let g=usersArr.find(x=>x.Id==currentCours.IdUser); 
     console.log(g);
     console.log(Guide);
     console.log(courses_arr);
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
            
              
            }
       
            
            const Send=()=>{
                console.log(coursSchema);
                updateCours(coursSchema).then();
                console.log("updating");
                dispatch(GetAllCoursesByPool(coursSchema.IdPool));
                console.log(courses_arr);
                nav("/ManagerNavBar/Courses");
            }
           
return (<>
     <div className="formDivUpdateCourse">
    <h1>עדכון קורס</h1>
    <form>
        <label >מחיר</label><br/>
        <input type="number" className="updateCard"  name="Price" placeholder={currentCours.Price} variant="standard" onChange={change} defaultValue={currentCours.Price} disabled={f.flag=="false"}/>
        <label >שם הקורס</label><br/>
        <input type="text" className="updateCard"  name="NameCours" placeholder={currentCours.NameCours} variant="standard" onChange={change} defaultValue={currentCours.NameCours} disabled={f.flag=="false"}/>
        <label >תיאור</label><br/>
        <input type="text" className="updateCard"  name="Dis" placeholder={currentCours.Dis} variant="standard" onChange={change} defaultValue={currentCours.Dis} disabled={f.flag=="false"}/>
        <label >מספר אנשים</label><br/>
        <input type="number" className="updateCard"  name="PeopleAmount" placeholder={currentCours.PeopleAmount} variant="standard" onChange={change} defaultValue={currentCours.PeopleAmount} disabled={f.flag=="false"}/>
      {console.log(Guide)}
        <label>מדריך הקורס</label><br/>
        <select className="select" variant="standard" onChange={change} defaultValue={currentCours.IdUser} disabled={f.flag=="false"}>
                {Guide.map(x => <option key={x.Id} defaultValue={g?.Name}>{x?.Name}</option>)}
            </select><br />
        <input type="button" value="עדכון" className="buttonUpdateCard" onClick={()=>Send()}/>
    </form>
    </div></>
); 
}