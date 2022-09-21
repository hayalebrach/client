// // import * as React from 'react';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';

// // function createData(nameDays, namePool, StartHour, EndtHour, Type) {
// //   return {nameDays, namePool, StartHour, EndtHour, Type};
// // }
// // //כאן אלו הנתונים שהוא מציג
// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];

// // export default function BasicTable() {
// //   return (
// //     <TableContainer component={Paper} className="TableContainer">
// //       <Table sx={{ width: 400 }} aria-label="simple table" className="Table"  >
// //         <TableHead >
// //           <TableRow id="TableRow" >
// //             <TableCell >יום בשבוע</TableCell>
// //             <TableCell>שם הבריכה</TableCell>
// //             <TableCell>שעת התחלה</TableCell>
// //             <TableCell>שעת סיום</TableCell>
// //             <TableCell>(גבר/אישה)</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody >
// //           {rows.map((row) => (
// //             <TableRow 
// //               key={row.name}
// //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //             >
// //               <TableCell component="th" scope="row"  >
// //                 {row.name}
// //               </TableCell>
// //               <TableCell align="right" >{row.calories}</TableCell>
// //               <TableCell align="right">{row.fat}</TableCell>
// //               <TableCell align="right">{row.carbs}</TableCell>
// //               <TableCell align="right">{row.protein}</TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
        
// //       </Table>
// //     </TableContainer>
// //   );
// // }

// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'nameDays', headerName: 'יום',  headerClassName: 'super-app-theme--header', width: 130},
//   { field: 'namePool', headerName: 'שם הבריכה',headerClassName: 'super-app-theme--header', width: 130 },
//   {field: 'startHour',headerName: 'שעת התחלה',headerClassName: 'super-app-theme--header',type: 'number',width: 90,},
//   {field: 'startHour',headerName: 'שעת סיום', headerClassName: 'super-app-theme--header',type: 'number',width: 90,},

//   // {field: 'fullName',
//   //   headerName: 'Full name',
//   //   description: 'This column has a value getter and is not sortable.',
//   //   sortable: false,
//   //   width: 160,
//   //   valueGetter: (params) =>
//   //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   // },
// ];

//  const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//  ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width:1000,border:3}}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         // pageSize={5}
//         // rowsPerPageOptions={[5]}
//         sx={{
//           boxShadow: 2,
//           border: 6,
//           borderColor: 'primary.light',
//           '& .MuiDataGrid-cell:hover': {
//             color: 'primary.main',
            
//           },
//           '& .super-app-theme--header': {
//             backgroundColor: 'rgba(255, 7, 0, 0.55)',
//           },
//         }}
//       />
//     </div> 
//   );
// }
