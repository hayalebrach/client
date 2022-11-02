import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { getById } from "../../store/Actions/Users"
import { getAllUsersByIdPool } from "../../store/Actions/Pools"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import { yellow } from '@mui/material/colors';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 25,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 25,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(DateBuy, Price, EntersAmount) {
//   return { DateBuy, Price, EntersAmount};
// }

// const rows = [
//   createData('10-12-2022', 159, 6),
//   createData('10-12-2022', 237, 9),
//   createData('10-12-2022', 262, 16),
// ];

export default function TheUser() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { UsersPool, HistoryUser } = useSelector(state => ({
    UsersPool: state.UsersPool,
    HistoryUser: state.HistoryUser
  }), shallowEqual);
  // const x = HistoryUser[0];
  const y = HistoryUser[0]?.NameUser;
  const ComeBack = () => {
    nav("/ManagerNavBar/AllUsers");
  }




  return (<>
    <input type="button" value="חזרה לדף המשתמשים" onClick={() => ComeBack()} />
    <h1>{y}</h1><br /><br />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{ backgroundColor: 'red', color: 'white', }}>
          <TableRow>
            <StyledTableCell align="center">תאריך קניה</StyledTableCell>
            <StyledTableCell align="center">מחיר</StyledTableCell>
            <StyledTableCell align="center">מספר כניסות</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {HistoryUser.map(HistoryUser => (
            <StyledTableRow key={HistoryUser.name}>

              <StyledTableCell align="center">{HistoryUser.DateBuy}</StyledTableCell>
              <StyledTableCell align="center">{HistoryUser.Price}</StyledTableCell>
              <StyledTableCell align="center">{HistoryUser.EntersAmount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}


