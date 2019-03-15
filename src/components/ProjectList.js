import React, { Component } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.renderProject = this.renderProject.bind(this);
    this.getProjectCover = this.getProjectCover.bind(this);
  }

  getProjectCover(project) {
    const coverObject = project.covers;
    const imageUrl =
      coverObject[
        Object.keys(coverObject)[Object.keys(coverObject).length - 1]
      ];
    return imageUrl;
  }

  renderProject() {
    const projects = this.props.projects;
    if (projects.length === 0) {
      return <CircularProgress color="primary" />;
    }
    return projects.map(project => (
      <GridListTile key={project.id} style={{ padding: "10px" }}>
        <a href={project.url}>
          <img src={this.getProjectCover(project)} alt={project.name} />
        </a>
        <GridListTileBar title={project.name} />
      </GridListTile>
    ));
  }

  render() {
    return (
      <div className="photoListRoot">
        <GridList style={{ margin: 5 }} cellHeight={250} cols={3}>
          {this.renderProject()}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.user.projects
  };
};

export default connect(
  mapStateToProps, {}
)(ProjectList);
