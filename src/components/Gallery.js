import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewDayIcon from "@material-ui/icons/ViewDay";
import GridOnIcon from "@material-ui/icons/GridOn";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

class Gallery extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper className="root">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="primary"
          centered
        >
          <Tab icon={<GridOnIcon />} label="Project List" />
          <Tab icon={<ViewDayIcon />} label="Project Details" />
        </Tabs>
        {this.state.value === 0 && <ProjectList projects={this.props.projects} />}
        {this.state.value === 1 && <ProjectDetail projects={this.props.projects} data={this.props.data}/>}
      </Paper>
    );
  }
}

export default Gallery;
