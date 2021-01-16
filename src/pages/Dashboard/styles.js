import { makeStyles } from "@material-ui/core/styles";

const dashboardStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

export default dashboardStyles;
