import * as React from 'react';
import {useEffect, useState} from "react";
import {useSelector,useDispatch,shallowEqual}from "react-redux";
import {useNavigate} from "react-router";
import {getAllCardByIdPool,getById,DeletCard,TheCard}from "../../store/Actions/Card";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./AllCardsToPool.css";
import '../Cart/Cart.css';
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
  const [c,SetC]=useState();
  const handleChange = (event) => {
    setAct(event.target.value);
    Seta(event.target.value);
  };

const update=(Id)=>{
  console.log(Id);
  getById(Id).then(x=>func(x.data));
  
}
const func=(data)=>{

  console.log(data);
  dispatch(TheCard(data));
  nav(("/UpdateCard/"+true));
}
const Delet=(Id)=>{
  let card=CardsArr.find(x=>x.Id==Id)
  DeletCard(card).then(alert("כרטיס זה נמחק מרשימת הכרטיסים לבריכה זו")); 
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
        <div className="divCard">{
            CardsArr.map(CardsArr=><><div className="Card" key={CardsArr.Id}>מחיר:{CardsArr.Price}<br/> כמות כניסות:{CardsArr.EntersAmount}<br/>
            {a==20?<input type="button" value="עדכן" className="button4" onClick={()=>update(CardsArr.Id)}/>:null}
            {a==30?<input type="button" value="מחק"  className="button4" onClick={()=>Delet(CardsArr.Id)}/>:null}
            <img src="/Pic/swimming-pool.png" className="cardImg"></img>
            <br/> </div></> )
       } </div>
   
    </>
  )
}