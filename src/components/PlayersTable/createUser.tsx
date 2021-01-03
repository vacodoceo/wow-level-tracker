import { useState } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import playersTableStyles from "./styles";

interface CreateUserProps {
  closeDialog: Function;
}

const CreateUser = ({ closeDialog }: CreateUserProps) => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [error, setError] = useState({
    name: false,
    lastName: false
  });

  const handleCancelDialog = () => {
    closeDialog();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newError = {
      name: !name,
      lastName: !lastName
    };
    setError(newError);
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
        <Button type="submit" color="primary">
          Añadir
        </Button>
      </DialogActions>
    </form>
  );
};

export default CreateUser;
