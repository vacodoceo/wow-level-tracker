import { Fragment, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import { withStyles } from "@material-ui/core/styles";

import { firestore, functions, User } from "../../firebase";
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
    idField: "email"
  });
  const [dialogMode, setDialogMode] = useState<DialogMode>(null);
  const [updating, setUpdating] = useState<boolean>(false);

  const updateCharactersInfo = async () => {
    setUpdating(true);
    await functions.httpsCallable("updateCharactersInfo")();
    setUpdating(false);
  };

  const classes = playersTableStyles();
  return (
    <Fragment>
      <Container className={classes.tableHeader}>
        <Title>Jugadores</Title>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          endIcon={updating ? <CircularProgress size={18} /> : <RefreshIcon />}
          onClick={() => updateCharactersInfo()}
        >
          Actualizar
        </Button>
      </Container>

      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Correo</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Apellido</StyledTableCell>
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
