import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import appStyles from "./styles";
import theme from "./theme";
import Copyright from "./components/Copyright";
import { Container } from "@material-ui/core";

const App: React.FC = (): JSX.Element => {
  const classes = appStyles();

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <NavBar />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Dashboard />
            </Container>
          </main>
          <Copyright />
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
