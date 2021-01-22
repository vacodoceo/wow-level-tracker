import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  Button,
  CircularProgress,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import firebase, { firestore, Character, User } from "../../firebase";
import realms, { Realm } from "../../constants/realms";
import formsStyles from "./styles";

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
    realm: false,
  });
  const [users] = useCollectionData<User>(firestore.collection("users"), {
    idField: "email",
  });
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleCancelDialog = () => {
    closeDialog();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newError = {
      owner: !owner,
      name: !name,
      realm: !realm,
    };
    setError(newError);

    const validInput = Object.values(newError).every((error) => !error);
    if (validInput) {
      setSubmitting(true);
      const newCharacter: Character = {
        name,
        realm: realm!,
        level: null,
      };
      firestore
        .collection("users")
        .doc(owner?.email)
        .update({
          characters: firebase.firestore.FieldValue.arrayUnion(newCharacter),
        })
        .then(() => {
          setSubmitting(false);
          closeDialog();
        });
    }
  };

  const classes = formsStyles();
  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>Añadir personaje</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogText}>
          Ingresa la información de tu personaje
        </DialogContentText>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Autocomplete
              id="owner"
              options={users || []}
              size="small"
              autoHighlight
              getOptionLabel={(option) =>
                `${option.email} (${option.name} ${option.lastName})`
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={error.owner}
                  label="Cuenta del personaje*"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    form: {
                      autocomplete: "off", // disable autocomplete and autofill
                    },
                  }}
                />
              )}
              value={owner}
              onChange={(e, newValue) => setOwner(newValue)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={error.name}
              variant="outlined"
              size="small"
              id="character-name-input"
              label="Nombre del personaje*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="character-realm-input"
              options={sortedRealms}
              size="small"
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={error.realm}
                  label="Reino del personaje*"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    form: {
                      autocomplete: "off",
                    }, // disable autocomplete and autofill
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
          {submitting && (
            <CircularProgress size={20} className={classes.loadingIcon} />
          )}
          Añadir
        </Button>
      </DialogActions>
    </form>
  );
};

export default CreateCharacter;
