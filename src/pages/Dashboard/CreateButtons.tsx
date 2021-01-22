import { useState, Fragment } from "react";
import { Button, Dialog, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import CreateUser from "../../components/forms/createUser";
import CreateCharacter from "../../components/forms/createCharacter";

type DialogMode = "character" | "user" | null;

const CreateButtons = () => {
  const [dialogMode, setDialogMode] = useState<DialogMode>(null);

  return (
    <Fragment>
      <Grid container justify="flex-end" spacing={1}>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => setDialogMode("user")}
            startIcon={<AddIcon />}
          >
            Jugador
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => setDialogMode("character")}
            startIcon={<AddIcon />}
          >
            Personaje
          </Button>
        </Grid>
      </Grid>

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
};
export default CreateButtons;
