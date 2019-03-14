import React, { Component } from "react";
import UserInfo from "./UserInfo";
import UserProject from "./UserProject";

class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <UserInfo data={this.props.data} />
        <UserProject projects={this.props.projects} />
      </React.Fragment>
    );
  }
}

export default Gallery;
