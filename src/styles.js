import { makeStyles } from "@material-ui/core/styles";

const appStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 72px)",
    overflow: "auto"
  },
  root: {
    display: "flex",
    flexDirection: "column"
  }
}));

export default appStyles;
