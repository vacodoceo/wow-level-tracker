import { useCollectionData } from "react-firebase-hooks/firestore";
import { Grid, Paper } from "@material-ui/core";

import { firestore, User } from "../../firebase";
import CreateButtons from "./CreateButtons";
import Header from "./Header";
import PlayersDataGrid from "./PlayersDataGrid";
import dashboardStyles from "./styles";

export default function Dashboard() {
  const [users] = useCollectionData<User>(firestore.collection("users"), {
    idField: "email",
  });
  const classes = dashboardStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header users={users} />
        </Grid>
        <Grid item xs={12}>
          <PlayersDataGrid />
        </Grid>
        <Grid item xs={12}>
          <CreateButtons />
        </Grid>
      </Grid>
    </Paper>
  );
}
