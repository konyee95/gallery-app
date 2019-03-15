import React, { Component } from "react";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import store from "./store";
import Main from "./container/Main";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#512DA8", contrastText: "#ffffff" },
    secondary: { main: "#FF4081", contrastText: "#000000" }
  },
  typography: { useNextVariants: true }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;