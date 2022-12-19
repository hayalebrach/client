import * as React from 'react';
import {useEffect, useState} from "react";
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import {getAllCardByIdPool,getById,DeletCard}from "../../store/Actions/Card";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./AllCardsToPool.css";
export default function AllCardsToPool(){
  const {currentPool,CardsArr,currentCard} = useSelector(state => ({
    currentPool: state.currentPool,
    CardsArr:state.CardsArr,
    currentCard:state.currentCard
  }), shallowEqual);
  useEffect(() => {  
    dispatch(getAllCardByIdPool(currentPool.Id));
}, [CardsArr,currentCard]); 

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
  dispatch(getById(Id));
  nav(("/UpdateCard/"+true));
}
const Delet=(Id)=>{
  console.log(Id);
  console.log("שלום לכם");
  let card=CardsArr.find(x=>x.Id==Id)
  dispatch(DeletCard(card)); 
}
  return(
    <>
    <h1>כל הכרטיסים</h1>
    
    
   
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
          <MenuItem value={10} id="css-hfutr2-MuiSvgIcon-root-MuiSelect-icon" onClick={()=>nav("/AddDetailsCard/true")}>הוספה</MenuItem>
          <MenuItem value={20} id="css-hfutr2-MuiSvgIcon-root-MuiSelect-icon">עדכון</MenuItem>
          <MenuItem value={30} id="css-hfutr2-MuiSvgIcon-root-MuiSelect-icon" >מחיקה</MenuItem>
        </Select>
      </FormControl>
    </Box>


    <ul>
        {
            CardsArr.map(CardsArr=><><br/> <li className="li" key={CardsArr.Id}><h3>id: {CardsArr.Id}</h3><br/> מחיר:{CardsArr.Price}<br/> כמות בניסות:{CardsArr.EntersAmount}<br/>
            {a==20?<input type="button" value="עדכן" onClick={()=>update(CardsArr.Id)}/>:null}
            {a==30?<input type="button" value="מחק" onClick={()=>Delet(CardsArr.Id)}/>:null}
            
            <br/> </li></> )
        }
    </ul>
    <input type="button" value="חזרה לעמוד הבית" onClick={()=>nav("/ManagerNavBar")}/>







    </>
  )
}