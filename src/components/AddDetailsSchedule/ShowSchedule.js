import React ,{ useEffect, useState } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {GetTimeByIdPool,GetListOfDateAndPool,GetSchedule} from '../../store/Actions/Time';
import dayjs from 'dayjs';
import Locale from 'dayjs/locale/en-tt';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "./ShowSchedule.css";
// const schema = yup.object({

//     NumPeople:yup.number().positive().integer().required(),
// }).required();
const schema = yup.object({
    NumPeople: yup.number().positive().integer().required(),
    // IdPool: yup.number(),
     EnterDate: yup.date().required(),
    // IdCustomerToPool: yup.number(),
    // StartHour: yup.string().required(),
    //EndHour:yup.string().required(),
  }).required();



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 23,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 23,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 2,
    },
}));

export default function ShowSchedule() {
    const dispatch = useDispatch();
    const { Days, currentPool} = useSelector(state => ({
        Days: state.Days,
        currentPool: state.currentPool
    }), shallowEqual);

  //לוח זמנים
  let [schedule, Setschedule] = useState([]);

    React.useEffect(() => {
       GetTimeByIdPool(currentPool.Id).then(x=>Setschedule(x.data));
      const timer = setInterval(() => {
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); 
      }
    }, [schedule]);



//תאריך נוכחי
    const locale = 'eb';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
    const day = today.toLocaleDateString(locale,{weekday:'long'});
    const date = `${today.getDate()} /${today.toLocaleDateString(locale, { month: 'numeric' })}/${today.toLocaleDateString(locale,{year:'numeric'})}\n\n`;
    
//תאריך רצוי    
    const Locale ='en-tt';
    const [datePickerValue, setDatePickerValue] = React.useState(date);
    const [s,setS]=useState();//הזמן במערת השעות שאותו רוצים לשריין
    let Da;//התאריך שאותו רוצים לשריין
    let WeekDay;//היום שבו התאריך מתקים -בשביל לבדוק  היום של שתאריך תואם את היום בלוח זמנים

//בדיקת מספר האנשים בבריכה באותו היום
const [ChekTheNumPeople,SetCTNP]=useState([]);


//קבלת הלוח זמנים הנוכחי מהשרת  
    const GetScheduleByIsSchedule=(y)=>{
      GetSchedule(y).then(x=>Func(x.data));
   }
   const Func=(data)=>{
    setS(data);
   }

//בבדיקה שהיום של הלוח שמנים הנבחר תואם את היום של התאריך
   const ChekeTheDate=(EnterDate)=>{
  
       console.log(datePickerValue);
       let day=datePickerValue.$d;
       console.log(day);
       setDatePickerValue(day);
      console.log(datePickerValue);
       WeekDay = datePickerValue.$W;//זה היום בשבוע שבו התאריך מתקים
       if(WeekDay==0)
          WeekDay=7;
       if(WeekDay==s?.IdDays)
         GetListOfDateAndPool(currentPool.Id,datePickerValue).then(x=>SetCTNP(x.data));     
       else
       alert("התאריך הנבחר אינו תואם את בחירת מערכת השעות");
       
   }
//בדיקה אם מספר אנשים זה יכול להיכנס בבריכה
const ChekNumPeople=(NumPeople)=>{
    console.log(NumPeople);
    let num=0;
    for(let i=0;i<ChekTheNumPeople.lenght;i++)
          num+=ChekTheNumPeople[i].NumPeople;
     console.log(num);
     num+=NumPeople;
    if(currentPool.Amount>num)
       alert("אנא נסו יום אחר בבריכה זו- מספר האנשים ביום זה חורג מהמותר בבריכה ");
}


const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

// const onSubmit = (data) => { 
//     alert("i am hear");  
// data.IdPool=currentPool.Id;
// data.EnterDate=Da;
// data.StartHour=s?.StartHour;
// data.EndHour=s?.EndHour;
// ChekNumPeople(data.NumPeople);
// data.NumPeople=data.NumPeople;
      
// }
const onSubmit = (data) => console.log(data);

//קבלת כל הרשימה של אלא ששרינו מרום לאותה בריכה עם אותו תאריך

    return (<>
      

        <h1>לוח זמנים</h1>
        <h2>בחר קודם כל יום שאתה רוצה ולאחר מכן את התאריך המדובר</h2><br/>
        {day}<br/>
        {date}<br/>
        
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("NumPeople")} />
      <p>{errors.NumPeople?.message}</p>
      <input {...register("EnterDate")} type="date" onChange={()=>ChekeTheDate(schema.EnterDate)}/>
      <p>{errors.EnterDate?.message}</p>


        {/* <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={Locale} className="css-1lwbda4-MuiStack-root">
      <Stack spacing={3} >
        <ToggleButtonGroup  value={Locale} exclusive sx={{ mb: 2, display: 'block' }} >
        </ToggleButtonGroup>
        <DatePicker 
         className="css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"
          value={datePickerValue}
          onChange={(newValue) => setDatePickerValue(newValue)}
          renderInput={(params) => <TextField  {...params} className="css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root "/>}
        />       
      </Stack>
    </LocalizationProvider><br/> */}
    <input type="submit" />
    </form>
    


        <br />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead key={Days.IdDays} style={{ color: 'white' }}>
                    <TableRow >
                        {Days.map(x => <StyledTableCell key={x.Id} align="center" >{x.NameDay}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        {Days.map(x => <StyledTableCell key={x.Id} align="center" >
                            {
                                schedule.map(y => y.IdDays === x.Id ? <div>
                                    שעת התחלה: {y.StartHour}<br/>  שעת סיום: {y.EndHour}<br/> {y.Type == 0 ? "בנות" : "בנים"}
                                <input type="button" value="שריון מקום" onClick={()=>GetScheduleByIsSchedule(y.Id)}/>
                                </div> : null)
                            }</StyledTableCell>)}


                    </StyledTableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
        <br />
        <br />

    </>)






}