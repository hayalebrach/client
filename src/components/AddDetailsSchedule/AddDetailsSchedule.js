import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import * as yup from "yup";
import { getAllDays } from "../../store/Actions/Pools";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Popper } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { create } from "axios/lib/axios";
import {ChekAndAdd,GetTimeByIdPool} from '../../store/Actions/Time'
import { object } from "yup/lib/locale";

const schema = yup.object({
    StartHour: yup.string().required(),
    EndHour: yup.string().required(),
    Type: yup.number().positive().integer().required(),
    IdDays: yup.number().positive().integer(),
    IdPool: yup.number().positive().integer(),
    Status:yup.string()
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
export default function AddDetailsSchedule() {

    let [schedule, Setschedule] = useState([]);



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDays());
        GetTimeByIdPool(currentPool.Id).then(x=>Setschedule(x.data));
        
        //alert("מערכת השעות ריקה נא להכניס נתונים");
    }, [schedule])
    const { Days, currentPool} = useSelector(state => ({
        Days: state.Days,
        currentPool: state.currentPool

    }), shallowEqual);
    const typeArr = [{ Id: 1, Name: "בנים" }, { Id: 2, Name: "בנות" }];
    const sum = 0;
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const validator = e => {
        e.preventDefault();
    }
    const onSubmit = (data) => {
        data.IdPool=currentPool.Id;
        data.Status=true;
        //כאן זה עושה שאם הוא לחץ על בנות אז בSQL יהיה רשום FשLSE
        if(data.Type==2)
             data.Type=0;
         console.log(data);
        if(data.StartHour>data.EndHour)
           Chek();
        else
        {
            ChekAndAdd(data).then("נוסף בהצלחה");        
            console.log(schedule);
                 
        }
      
                  
    }
    const Chek=()=>{
        alert(" נתונים שגויים-שעת התחלה גדולה משעת סיום");
    }
 
    return (<>
        <h1>AddDetailsSchedule</h1>
        <h2>הוספת לוח זמנים של הבריכה</h2>
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label>יום</label><br />
            <select  {...register("IdDays")} className="select" onChange={validator} >
                {Days.map(x => <option key={x.TypeUser} value={x.Id}>{x.NameDay}</option>)}
            </select><br />
            <Input register={register} errors={errors} name="StartHour" lablName="שעת התחלה" className="" type="time" onChange={validator} />
            <Input register={register} errors={errors} name="EndHour" lablName="שעת סיום" className="" type="time" onChange={validator} />
            <label>מגזר</label><br />
            <select  {...register("Type")} className="select" onChange={validator}>
                {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
            </select><br />

           
        
            <input type="submit" value="הוסף" />
            
            

        </form>




        <h1>לוח זמנים</h1>
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
                        {/* {console.log(schedule, Days)} */}
                        {Days.map(x => <StyledTableCell key={x.Id} align="center" >
                            {
                                schedule.map(y => y.IdDays === x.Id ? <div>
                                    שעת התחלה: {y.StartHour}<br/>  שעת סיום: {y.EndHour}<br/> {y.Type == 0 ? "בנות" : "בנים"}
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