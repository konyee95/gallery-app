import React, { Component } from "react";
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
    const data = this.props.projects;
    if (data == null) {
      return "loading";
    }
    const { projects } = data;
    return projects.map(project => (
      <GridListTile key={project.id}  style={{ padding: '10px' }}>
        <img src={this.getProjectCover(project)} alt={project.name} />
        <GridListTileBar title={project.name} />
      </GridListTile>
    ));
  }

  render() {
    return (
      <div className="photoListRoot">
        <GridList style={{ margin: 5 }} cellHeight={250} cols={3} >
          {this.renderProject()}
        </GridList>
      </div>
    );
  }
}

export default ProjectList;
