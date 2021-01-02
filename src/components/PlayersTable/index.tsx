import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Title";
import { withStyles } from "@material-ui/core/styles";

import { firestore } from "../../firebase";
import playersTableStyles from "./styles";
import Row from "./row";

interface Character {
  name: string;
  realm: string;
  level: number | undefined;
}

export interface User {
  name: string;
  lastName: string;
  characters: Character[];
}

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

export default function Orders() {
  const [values, loading, error] = useCollectionData<User>(
    firestore.collection("users")
  );

  console.log(values);

  const classes = playersTableStyles();
  return (
    <React.Fragment>
      <Title>Usuarios</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Apellido</StyledTableCell>
            <StyledTableCell>Fecha de término</StyledTableCell>
            <StyledTableCell align="right">Personaje más alto</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values?.map(user => (
            <Row user={user} key={`${user.name}-${user.lastName}`} />
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
