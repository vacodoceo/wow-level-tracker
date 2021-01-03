import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { firestore, User } from "../../firebase";
import realms, { Realm } from "../../constants/realms";
import playersTableStyles from "./styles";

interface CreateCharacterProps {
  closeDialog: Function;
}

const sortedRealms: Realm[] = realms.sort((a: Realm, b: Realm) =>
  a.name > b.name ? 1 : -1
);

const CreateCharacter = ({ closeDialog }: CreateCharacterProps) => {
  const [owner, setOwner] = useState<User | null>(null);
  const [name, setName] = useState<string>("");
  const [realm, setRealm] = useState<Realm | null>(null);
  const [error, setError] = useState({
    owner: false,
    name: false,
    realm: false
  });
  const [users] = useCollectionData<User>(firestore.collection("users"), {
    idField: "id"
  });

  const handleCancelDialog = () => {
    closeDialog();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newError = {
      owner: !owner,
      name: !name,
      realm: !realm
    };
    setError(newError);
  };

  const classes = playersTableStyles();
  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>Añadir personaje</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogText}>
          Ingresa la información de tu personaje
        </DialogContentText>
        <Grid container spacing={2} justify="center">
          <Grid item xs={6}>
            <Autocomplete
              id="owner"
              options={users || []}
              size="small"
              autoHighlight
              getOptionLabel={option => `${option.name} ${option.lastName}`}
              renderInput={params => (
                <TextField
                  {...params}
                  error={error.owner}
                  label="Dueño del personaje*"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    form: {
                      autocomplete: "off"
                    } // disable autocomplete and autofill
                  }}
                />
              )}
              value={owner}
              onChange={(e, newValue) => setOwner(newValue)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={error.name}
              variant="outlined"
              size="small"
              id="character-name-input"
              label="Nombre del personaje*"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              id="character-realm-input"
              options={sortedRealms}
              size="small"
              autoHighlight
              getOptionLabel={option => option.name}
              renderInput={params => (
                <TextField
                  {...params}
                  error={error.realm}
                  label="Reino del personaje*"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    form: {
                      autocomplete: "off"
                    } // disable autocomplete and autofill
                  }}
                />
              )}
              value={realm}
              onChange={(e, newValue) => setRealm(newValue)}
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

export default CreateCharacter;
