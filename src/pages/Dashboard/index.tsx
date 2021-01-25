import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Grid, Paper } from "@material-ui/core";

import { firestore, User } from "../../firebase";
import CreateButtons from "./CreateButtons";
import Header from "./Header";
import PlayersDataGrid from "./PlayersDataGrid";
import dashboardStyles from "./styles";

export default function Dashboard() {
  const [users, loading] = useCollectionData<User>(
    firestore.collection("users"),
    {
      idField: "email"
    }
  );
  const [groupFilter, setGroupFilter] = useState("leveling");

  const classes = dashboardStyles();
  if (loading) {
    return <Paper className={classes.paper}>Cargando</Paper>;
  }

  console.log(groupFilter, users);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header
            users={users!}
            groupFilter={groupFilter}
            setGroupFilter={setGroupFilter}
          />
        </Grid>
        <Grid item xs={12} style={{ height: "calc(100vh - 360px)" }}>
          <PlayersDataGrid
            users={users!.filter(user => user.program === groupFilter)}
          />
        </Grid>
        <Grid item xs={12}>
          <CreateButtons groupFilter={groupFilter} />
        </Grid>
      </Grid>
    </Paper>
  );
}
