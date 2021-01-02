import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PlayersTable from "../../components/PlayersTable";
import dashboardStyles from "./styles";

export default function Dashboard() {
  const classes = dashboardStyles();

  return (
    <Grid container spacing={3}>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <PlayersTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
