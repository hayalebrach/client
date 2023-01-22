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
        color: theme.palette.common.black,
        fontSize: 23,
        border:'2px black solid'

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

export default function ShowDatailsScheduleCours() {
    const dispatch = useDispatch();
    const nav=useNavigate();
    const { Days, currentPool,courses_arr} = useSelector(state => ({
        Days: state.Days,
        currentPool: state.currentPool,
        courses_arr:state.courses_arr
    }), shallowEqual);

  //לוח זמנים
  let [schedule, Setschedule] = useState([]);

    useEffect(() => {
        if(currentPool)
        dispatch(GetAllCoursesByPool(currentPool.Id));
    
        GetTimeOfCoursByIdPool(currentPool.Id).then(x=>Setschedule(x.data));    
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
        <br />

        <TableContainer component={Paper} style={{backgroundColor:'#ffffff40',border:'2px black solid'}}>

            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead key={Days.IdDays} style={{ color: 'white' }}>
                    <TableRow >
                        {Days.map(x => <StyledTableCell key={x.Id} align="center" >{x.NameDay}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>

                        {Days.map(x => <StyledTableCell key={x.Id} align="center" style={{padding:'0px',border:'2px black solid',verticalAlign:'initial'}}>

                            {
                                schedule.map(y => y.IdDays === x.Id ? <div style={{border:'1px black solid'}}>
                                    <b>{(courses_arr.find(x=>x.Id==y.IdCours)).NameCours}</b>
                                    שעת התחלה: {y.StartHour}<br/>  שעת סיום: {y.EndHour}<br/> {y.Type == 0 ? "בנות" : "בנים"}<br/><input type="button" className="savePlaceButton"value="לשמירת מקום" onClick={()=>GetScheduleByIdSchedule(y.Id)}/>
                                </div> : null)
                            }</StyledTableCell>)}


                    </StyledTableRow>
                    {/* ))} */}
                </TableBody>
            </Table>
        </TableContainer>
        <br />
        <br />

    </>)






}