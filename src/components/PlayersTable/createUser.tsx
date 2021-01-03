import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Title from "../../components/Title";
import playersTableStyles from "./styles";

const CreateUser = () => {
  const classes = playersTableStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Title>Añadir personaje</Title>
      <form onSubmit={console.log}>
        <TextField required id="name" label="Nombre" />
      </form>
    </Paper>
  );
};

export default CreateUser;
