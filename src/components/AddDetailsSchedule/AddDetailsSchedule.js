// import {React,useEffect,useState}  from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import Input from "../Input";
// import * as yup from "yup";
// import {getAllDays}from "../../store/Actions/Pools";
// import {useDispatch,useSelector,shallowEqual} from "react-redux";
// import { Popper } from "@mui/material";
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { create } from "axios/lib/axios";
// const schema = yup.object({
//     StartHour: yup.string().required(),
//     EndHour: yup.string().required(),
//     Type:yup.number().positive().integer().required(),
//     IdDays:yup.number().positive().integer().required(),
//     //IdPool:yup.number().positive().integer().required()
// }).required();

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//       fontSize: 23,
     
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 23,
//     },
//   }));
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 2,
//     },
//   }));
//   function createData(IdDays,{Type,Endhour,StartHour}){
//        return(IdDays,{Type,Endhour,StartHour})
// }

//   const schedule = [ 
//    createData(1,{(1,'11:11','22:22')})
//     createData(1),
//     createData(1,2,'00:32','23:32'),
//     createData(4,2,'00:32','23:32'),
//     createData( 3,2,'01:32','23:32') 
//   ];

// export default function AddDetailsSchedule(){

//     //let [schedule,Setschedule]=useState([]);
  
    
   
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getAllDays());
//         // let x=schedule.length;
//         //   if(schedule[x-1]?.IdDays!=null){
//         //      document.getElementById(schedule[x-1]?.IdDays).innerText+="שעת התחלה: "+schedule[x-1].StartHour+   
//         //     "שעת סיום: "+schedule[x-1].EndHour;
//         //      if(schedule[x-1].Type==2)
//         //          document.getElementById(schedule[x-1]?.IdDays).innerText+="בנות";
//         //      else
//         //      document.getElementById(schedule[x-1]?.IdDays).innerText+="בנים";
//         //    }
       
        
//     }, []) 
//     console.log(schedule);
//     const { Days, currentPool ,Schedule} = useSelector(state => ({
//         Days: state.Days,
//         currentPool: state.currentPool,
//         Schedule:state.Schedule
//      }), shallowEqual);

//     // const typeArr = [{ Id: 1, Name: "בנים" }, { Id: 2, Name: "בנות" }];
//     // const sum=0;
//     // const { register, handleSubmit, formState: { errors } } = useForm({
//     //     resolver: yupResolver(schema)
//     // });
//     // const validator = e => {
//     //     e.preventDefault();}
   
    
//     // const onSubmit=(data)=>{
//     //     console.log("חיה ברכה ברגה");
//     //     console.log(data);
//     //     let a = [...schedule,data];
//     //     let index=schedule.findIndex(x=>x.IdDays==data.IdDays);
//         // if(index!=-1)
//         // {
            
//         // }
//          // alert(index);
//         // if(index==0)
//         //    alert("אישור");
//         //console.log(a); 
//         //Setschedule(a);
//         //console.log(schedule);
      
//     //}
  
    
//     return (<>
//         <h1>AddDetailsSchedule</h1>
//         <h2>הוספת לוח זמנים של הבריכה</h2>
//         <br/>
//         <br/>
//         {/* <br/>
//         <form onSubmit={handleSubmit(onSubmit)} className="form">
//            <label>יום</label><br/>
//             <select  {...register("IdDays")}  className="select" onChange={validator} >  
//                  {Days.map(x => <option key={x.TypeUser} value={x.Id}>{x.NameDay}</option>)}
//            </select><br/>
//             <Input register={register} errors={errors} name="StartHour" lablName="שעת התחלה" className="" type="time" onChange={validator}/>
//             <Input register={register} errors={errors} name="EndHour" lablName="שעת סיום" className="" type="time" onChange={validator}/>
//            <label>מגזר</label><br/>
//             <select  {...register("Type")}  className="select" onChange={validator}>  
//                  {typeArr.map(x => <option key={x.Id} value={x.Id}>{x.Name}</option>)}
//            </select><br/>
           
//           {/* // <input type="number" className="" {...register("IdPool")} value={currentPool.Id} onChange={validator} /> <br/> */}
//             {/*<input type="submit" value="הוסף"/>
            
//         </form>
        

        
     
//          <h1>לוח זמנים</h1>
//   <br/> */}
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead  key={Days.name} style={{color: 'white'}}>
//           <TableRow >         
//             <StyledTableCell align="center" >מוצא"ש</StyledTableCell>
//             <StyledTableCell align="center" >שישי</StyledTableCell>
//             <StyledTableCell align="center" >חמישי</StyledTableCell>
//             <StyledTableCell align="center" >רביעי</StyledTableCell>
//             <StyledTableCell align="center" >שלישי</StyledTableCell>
//             <StyledTableCell align="center" >שני</StyledTableCell>
//             <StyledTableCell align="center" >ראשון</StyledTableCell>             
//           </TableRow>        
//         </TableHead>       
//         <TableBody>
          
//           { schedule.map((schedule) => (
//             <StyledTableRow key={schedule.lenght}>
//               <StyledTableCell align="center" id="7" >
//             {schedule.StartHour}
//              </StyledTableCell>
//               <StyledTableCell align="center" id="6" >
//               {schedule.StartHour}
//                 </StyledTableCell>
//               <StyledTableCell align="center" id="5" >
//               {schedule.StartHour}
//                 </StyledTableCell>
//               <StyledTableCell align="center" id="4" >
//               {schedule.StartHour}
//                 </StyledTableCell>
//                 <StyledTableCell align="center" id="3" >
//                 {schedule.StartHour}
            
//                 </StyledTableCell>
//                 <StyledTableCell align="center" id="2" >
//                 {schedule.StartHour}
//                 </StyledTableCell>
//                 <StyledTableCell align="center" id="1" >
//                 {schedule.StartHour}
//                 </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//    <br/>
//    <br/> 
        
//         </>)
// }