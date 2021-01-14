import { makeStyles } from "@material-ui/core/styles";

const playersTableStyles = makeStyles(theme => ({
  addCharacterContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 0 0",
    "& > button": {
      margin: theme.spacing(1)
    }
  },
  dialogText: {
    padding: 0
  },
  loadingIcon: {
    marginRight: theme.spacing(1)
  },
  root: {
    "& > *": {
      borderBottom: "unset"
    }
  },
  seeMore: {
    marginTop: theme.spacing(3)
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    "& button": {
      height: "50%"
    }
  }
}));

export default playersTableStyles;
