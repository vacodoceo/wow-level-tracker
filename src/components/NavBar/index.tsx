import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import navBarStyles from "./styles";

const NavBar = () => {
  const classes = navBarStyles();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          WoW Level Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
