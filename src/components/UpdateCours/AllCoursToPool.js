import * as React from 'react';
import {useEffect, useState} from "react";
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import {GetAllCoursesByPool,getCours,Delete}from "../../store/Actions/Cours";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Cart/Cart.css';
import './AllCoursToPool.css';
export default function AllCoursToPool()
{
  const {currentPool,courses_arr,currentCours }= useSelector(state => ({
    currentPool: state.currentPool,
    courses_arr:state.courses_arr,
    currentCours:state.currentCours,
  }), shallowEqual);
//console.log(currentPool);
  useEffect(() => {  
    if(currentPool!=null)
      dispatch(GetAllCoursesByPool(currentPool.Id));
}, [courses_arr,currentCours]); 

  const nav=useNavigate();
  const dispatch=useDispatch();

  const [act, setAct] = React.useState('');
  const[a,Seta]=useState() ;
  const handleChange = (event) => {
    setAct(event.target.value);
    Seta(event.target.value);
  };

const update=(Id)=>{
  console.log(" ה' רק אתה יכול לעזור לי בזה");
  console.log(Id);
  dispatch(getCours(Id));
  console.log(currentCours);
  nav(("/UpdateCours/"+true));
}
const Delet=(Id)=>{
  console.log(Id);
  console.log("שלום לכם");
  let cours=courses_arr.find(x=>x.Id==Id);
  alert("קורס זה נמחק מרשימת הקורסים לבריכה זו");
  Delete(cours).then(); 
}
  return(
    <>
    <h1>כל הקורסים</h1>
    <Box id="css-0">
      <FormControl id="css-1nrlq1o-MuiFormControl-root">
        <InputLabel id="demo-simple-select-label">אפשרויות</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={act}
          label="אפשרויות"
          onChange={handleChange}
        >
          <MenuItem value={10} id="css-hfutr2-MuiSvgIcon-root-MuiSelect-icon" onClick={()=>nav("/AddDetailsCours/true")}>הוספה</MenuItem>
          <MenuItem value={20} id="css-hfutr2-MuiSvgIcon-root-MuiSelect-icon">עדכון</MenuItem>
          <MenuItem value={30} id="css-hfutr2-MuiSvgIcon-root-MuiSelect-icon" >מחיקה</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    <div className="divCard">{
            courses_arr.map(courses_arr=><><div className="Card" key={courses_arr.Id}><h3>שם הקורס: {courses_arr.NameCours}</h3><br/> תאור:{courses_arr.Dis}<br/>  מחיר:{courses_arr.Price}<br/>
        
         {a==20?<input type="button" value="עדכן" className="button4" onClick={()=>update(courses_arr.Id)}/>:null}
         {a==30?<input type="button" value="מחק" className="button4" onClick={()=>Delet(courses_arr.Id)}/>:null}
         <img src="/Pic/swimming-pool.png" className="cardImg"></img>
             </div></> )
        
       } </div>
        </>
  )
}