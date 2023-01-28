import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  container: {
    width: "75vw",
    paddingLeft: 20
  },
  table: {
    minWidth: 800,
  },
});

const UserList = () => {
  const classes = useStyles();

  const data = [
    {
      name: "John",
      email: "john@example.com",
      mobile: 1234567890,
    },
    {
      name: "John",
      email: "john@example.com",
      mobile: 1234567890,
    },
    {
      name: "John",
      email: "john@example.com",
      mobile: 1234567890,
    },
    {
      name: "John",
      email: "john@example.com",
      mobile: 1234567890,
    },
  ];

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell align="left">Email Id</StyledTableCell>
              <StyledTableCell align="left">Phone Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, key) => (
              <StyledTableRow key={key}>
                <StyledTableCell component="th" scope="row">
                  {item?.name}
                </StyledTableCell>
                <StyledTableCell align="left">{item?.email}</StyledTableCell>
                <StyledTableCell align="left">{item?.mobile}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
