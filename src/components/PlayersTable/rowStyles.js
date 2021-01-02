import { makeStyles } from "@material-ui/core/styles";

const playersTableRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset"
    }
  }
});

export default playersTableRowStyles;
