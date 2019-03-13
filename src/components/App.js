import React, { Component } from "react";
import axios from "axios";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Gallery from "./Gallery";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#512DA8", contrastText: "#ffffff" }, 
    secondary: { main: "#FF4081", contrastText: "#000000" } 
  },
  typography: { useNextVariants: true }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "matiascorea",
      apiKey: "pqfCQK6oyFGno7n6TqiGip8XJaCOfRHr",
      data: null,
      projects: null
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getUserProject = this.getUserProject.bind(this);
  }

  componentDidMount() {
    this.getUserInfo();
    this.getUserProject();
  }

  getUserInfo() {
    const { userName, apiKey } = this.state;
    axios
      .get(`https://api.behance.net/v2/users/${userName}?client_id=${apiKey}`)
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  getUserProject() {
    const { userName, apiKey } = this.state;
    axios
      .get(
        `https://api.behance.net/v2/users/${userName}/projects?client_id=${apiKey}`
      )
      .then(res => {
        this.setState({ projects: res.data });
      });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <UserInfo data={this.state.data} />
          <Gallery projects={this.state.projects} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
