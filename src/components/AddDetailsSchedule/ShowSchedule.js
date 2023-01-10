import React ,{ useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {GetTimeByIdPool,GetSchedule,Schedule} from '../../store/Actions/Time';
import "./ShowSchedule.css";
import { useNavigate } from "react-router";


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
    const nav=useNavigate();
    const { Days, currentPool} = useSelector(state => ({
        Days: state.Days,
        currentPool: state.currentPool
    }), shallowEqual);

  //לוח זמנים
  let [schedule, Setschedule] = useState([]);

    useEffect(() => {
       GetTimeByIdPool(currentPool.Id).then(x=>Setschedule(x.data));
    }, [schedule]);

 const [s,setS]=useState();//הזמן במערת השעות שאותו רוצים לשריין
//קבלת הלוח זמנים הנוכחי מהשרת  
    const GetScheduleByIdSchedule=(y)=>{
      GetSchedule(y).then(x=>Func(x.data));
   }
   const Func=(data)=>{
    setS(data);
    dispatch(Schedule(data));
    nav("/SavePlace");

   }


    return (<>
      

        <h1>לוח זמנים</h1>
        <h2>בחר קודם כל יום שאתה רוצה ולאחר מכן את התאריך המדובר</h2><br/>
      
        <br />
        <TableContainer component={Paper}  style={{backgroundColor:"#ffffff40",border:"2px black solid"}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead key={Days.IdDays} style={{ color: 'white' }}>
                    <TableRow >
                        {Days.map(x => <StyledTableCell key={x.Id} align="center" >{x.NameDay}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        {Days.map(x => <StyledTableCell key={x.Id} align="center"   style={{padding:"#0px",border:"2px solid black"}} >
                            {
                                schedule.map(y => y.IdDays === x.Id ? <div>
                                    שעת התחלה: {y.StartHour}<br/>  שעת סיום: {y.EndHour}<br/> {y.Type == 0 ? "בנות" : "בנים"}
                                <input type="button" value="שריון מקום" onClick={()=>GetScheduleByIdSchedule(y.Id)}/>
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