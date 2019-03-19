import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import CommentIcon from "@material-ui/icons/Comment";
import Typography from "@material-ui/core/Typography";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.getFirstOwner = this.getFirstOwner.bind(this);
    this.getOwnerPicture = this.getOwnerPicture.bind(this);
    this.renderProject = this.renderProject.bind(this);
    this.getProjectCover = this.getProjectCover.bind(this);
    this.getProjectPublishedDate = this.getProjectPublishedDate.bind(this);
  }

  getOwnerPicture(project) {
    const userSelected = project.owners[0].images;
    const imageUrl =
      userSelected[
        Object.keys(userSelected)[Object.keys(userSelected).length - 1]
      ];
    return imageUrl;
  }

  getFirstOwner(project) {
    const userSelected = project.owners[0].display_name;
    return userSelected;
  }

  getProjectCover(project) {
    const coverObject = project.covers;
    const imageUrl =
      coverObject[
        Object.keys(coverObject)[Object.keys(coverObject).length - 1]
      ];
    return imageUrl;
  }

  getProjectPublishedDate(project) {
    const modifedDate = project.modified_on;
    const date = new Date(modifedDate);
    const updateOnDate = date.toDateString();
    return updateOnDate;
  }

  renderProject() {
    const projects = this.props.projects;
    return projects.map(project => (
      <Card
        key={project.id}
        style={{ alignSelf: "center", width: 500, marginTop: 20 }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt={this.getFirstOwner(project)}
              src={this.getOwnerPicture(project)}
            />
          }
          title={this.getFirstOwner(project)}
        />
        <CardMedia
          style={{ height: 0, paddingTop: "56%" }}
          image={this.getProjectCover(project)}
          title={project.name}
        />
        <CardContent>
          <Typography variant="title" >
            {project.name}
          </Typography>
          <Typography variant="body2" color="primary">
            {this.getProjectPublishedDate(project)}
          </Typography>
        </CardContent>
        <CardActions className="actions" disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon color="secondary" />
          </IconButton>
          <Typography variant="subheading" color="textSecondary">
            {project.stats.appreciations}
          </Typography>
          <IconButton aria-label="Add comments">
            <CommentIcon color="primary"/>
          </IconButton>
          <Typography variant="subheading" color="textSecondary">
            {project.stats.comments}
          </Typography>
          <IconButton aria-label="Add comments">
            <RemoveRedEyeIcon />
          </IconButton>
          <Typography variant="subheading" color="textSecondary">
            {project.stats.views}
          </Typography>
        </CardActions>
      </Card>
    ));
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        {this.renderProject()}
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
  mapStateToProps,{}
)(ProjectDetail);
