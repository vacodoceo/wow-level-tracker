import { useState } from "react";
import {
  Button,
  CircularProgress,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField
} from "@material-ui/core";

import firebase, { firestore } from "../../firebase";
import playersTableStyles from "./styles";

interface CreateUserProps {
  closeDialog: Function;
}

const CreateUser = ({ closeDialog }: CreateUserProps) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [error, setError] = useState({
    email: false,
    name: false,
    lastName: false
  });
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleCancelDialog = () => {
    closeDialog();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newError = {
      email: !email,
      name: !name,
      lastName: !lastName
    };
    setError(newError);

    const validInput = Object.values(newError).every(error => !error);
    if (validInput) {
      setSubmitting(true);
      firestore
        .collection("users")
        .doc(email)
        .set({
          name,
          lastName,
          characters: [],
          updatedAt: firebase.firestore.Timestamp.now()
        })
        .then(() => {
          setSubmitting(false);
          closeDialog();
        });
    }
  };

  const classes = playersTableStyles();
  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>Añadir jugador</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogText}>
          Ingresa la información del jugador
        </DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              error={error.email}
              id="email"
              value={email}
              label="Correo de la cuenta*"
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              error={error.name}
              id="name"
              value={name}
              label="Nombre del jugador*"
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              error={error.lastName}
              id="lastName"
              label="Apellido del jugador*"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancelDialog} color="primary">
          Cancelar
        </Button>
        <Button type="submit" color="primary" disabled={submitting}>
          {submitting && (
            <CircularProgress size={20} className={classes.loadingIcon} />
          )}
          Añadir
        </Button>
      </DialogActions>
    </form>
  );
};

export default CreateUser;
