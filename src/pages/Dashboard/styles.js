import { makeStyles } from "@material-ui/core/styles";

const dashboardStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  updateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& button": {
      marginLeft: theme.spacing(1),
      height: "80%",
    },
  },
}));

export default dashboardStyles;
