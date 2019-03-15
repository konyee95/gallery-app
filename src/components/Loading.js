import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

class Loading extends Component {
  render() {
    return <CircularProgress color="primary" />;
  }
}

export default Loading;
