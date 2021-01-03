import { makeStyles } from "@material-ui/core/styles";

const playersTableStyles = makeStyles(theme => ({
  addCharacterContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 0"
  },
  paper: {
    position: "absolute",
    padding: theme.spacing(2, 4, 3),
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)"
  },
  root: {
    "& > *": {
      borderBottom: "unset"
    }
  },
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default playersTableStyles;
