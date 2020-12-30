import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import appStyles from "./styles";

const App: React.FC = (): JSX.Element => {
  const classes = appStyles();

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <NavBar />

          <Dashboard />
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
