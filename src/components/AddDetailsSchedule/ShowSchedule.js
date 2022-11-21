// import {React,useEffect,useState}  from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import Input from "../Input";
// import * as yup from "yup";
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// const schema = yup.object({
//   StartHour: yup.string().required(),
//   EndHour: yup.string().required(),
//   Type:yup.number().positive().integer().required(),
//   IdDays:yup.number().positive().integer().required(),
//  IdPool:yup.number().positive().integer().required()
// }).required();


// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 2,
//   },
// }));

// export default function CustomizedTables(props) {
//   let [sc,Setsc]=useState([]);
//   let dt=props.dt;
//   let a=[...sc,dt];

//   let days;
//   if(dt?.IdDays!=null)
//      days=dt.IdDays;
//   let Days=props.Days;
//   const typeArr = [{ Id: 1, Name: "בנים" }, { Id: 2, Name: "בנות" }];
 

// const ppp=()=>{
//   Setsc(a);
//   console.log(sc);
//   document.getElementById(days).innerText="שעת התחלה: "+dt?.StartHour+'<br/>'+
//   "שעת סיום: "+dt?.EndHour+'<br/>'+
//   typeArr[dt?.Type];

// }
//   return (<>
//    <input type="button" value="הצג" onClick={()=>ppp()}/>
//   <h1>לוח זמנים</h1>
//   <br/>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead  key={Days.name} style={{color: 'white'}}>
       
            
           
//           <TableRow > 
        
//             <StyledTableCell align="center">מוצא"ש</StyledTableCell>
//             <StyledTableCell align="center" >שישי</StyledTableCell>
//             <StyledTableCell align="center" >חמישי</StyledTableCell>
//             <StyledTableCell align="center" >רביעי</StyledTableCell>
//             <StyledTableCell align="center" >שלישי</StyledTableCell>
//             <StyledTableCell align="center" >שני</StyledTableCell>
//             <StyledTableCell align="center" >ראשון</StyledTableCell>             
//           </TableRow>
        
//         </TableHead>
       
//         <TableBody>
//           { sc.map((sc) => (
//             <StyledTableRow key={sc.name}>
//               {/* <StyledTableCell component="th" scope="row">
//                 {schedule.name}
//               </StyledTableCell> */}
//               <StyledTableCell align="center" >
//             <p id="7"></p>
             

//                 </StyledTableCell>
//               <StyledTableCell align="center" >
//                 <p id="6"></p>
                
//                 </StyledTableCell>
//               <StyledTableCell align="center" >
//              <p id="5"></p>
//                 </StyledTableCell>
//               <StyledTableCell align="center" >
//               <p id="4"></p>
//                 </StyledTableCell>
//                 <StyledTableCell align="center" >
//                <p id="3"></p>
//                 </StyledTableCell>
//                 <StyledTableCell align="center" >
//                <p id="2"></p>
//                 </StyledTableCell>
//                 <StyledTableCell align="center" >
//                 <p id="1"></p>
//                 </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//    <br/>
//    <br/>
//     </> );
// }
