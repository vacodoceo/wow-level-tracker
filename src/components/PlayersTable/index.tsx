import { Fragment, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

import { firestore, User } from "../../firebase";
import playersTableStyles from "./styles";
import CreateUser from "./createUser";
import CreateCharacter from "./createCharacter";
import Row from "./row";
import Title from "../Title";

type DialogMode = "character" | "user" | null;

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
  const [values] = useCollectionData<User>(firestore.collection("users"), {
    idField: "id"
  });
  const [dialogMode, setDialogMode] = useState<DialogMode>(null);

  const classes = playersTableStyles();
  return (
    <Fragment>
      <Title>Jugadores</Title>
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

      <Container className={classes.addCharacterContainer}>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => setDialogMode("user")}
          startIcon={<AddIcon />}
        >
          Añadir jugador
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => setDialogMode("character")}
          startIcon={<AddIcon />}
        >
          Añadir personaje
        </Button>
      </Container>

      <Dialog open={!!dialogMode} onClose={() => setDialogMode(null)} fullWidth>
        {dialogMode === "user" && (
          <CreateUser closeDialog={() => setDialogMode(null)} />
        )}
        {dialogMode === "character" && (
          <CreateCharacter closeDialog={() => setDialogMode(null)} />
        )}
      </Dialog>
    </Fragment>
  );
}
