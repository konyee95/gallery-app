import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Grid from "@material-ui/core/Grid";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PagesIcon from "@material-ui/icons/Pages";
import Typography from "@material-ui/core/Typography";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.getProfilePicture = this.getProfilePicture.bind(this);
    this.getProfileDescription = this.getProfileDescription.bind(this);
  }

  getProfileDescription(sections) {
    const description =
      sections[Object.keys(sections)[Object.keys(sections).length - 1]];

    const x = description.split(".");
    if (x.length >= 2) {
      return x[0] + "." + x[1] + ".";
    }
    return x[0];
  }

  getProfilePicture(images) {
    const imageUrl =
      images[Object.keys(images)[Object.keys(images).length - 1]];
    return imageUrl;
  }

  render() {
    const {
      images,
      display_name,
      views,
      followers,
      following,
      sections,
      location,
      occupation,
      twitter,
      url
    } = this.props.user;
    return (
      <React.Fragment>
        <div className="userInfo">
          <Grid container spacing={40}>
            <Grid item xs={3} align="center">
              <div className="userImageName">
                <a href={url}>
                  <img
                    className="img"
                    alt="complex"
                    src={this.getProfilePicture(images)}
                  />
                </a>
                <Typography
                  variant="h5"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  {display_name}
                </Typography>
              </div>
            </Grid>
            <Grid item xs>
              <div className="userDetail">
                <div className="userStatus">
                  <Grid container wrap="nowrap">
                    <Grid item xs>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        {views}
                      </Typography>
                      <Typography
                        variant="h6"
                        align="center"
                        color="textSecondary"
                      >
                        views
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        {followers}
                      </Typography>
                      <Typography
                        variant="h6"
                        align="center"
                        color="textSecondary"
                      >
                        followers
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        {following}
                      </Typography>
                      <Typography
                        variant="h6"
                        align="center"
                        color="textSecondary"
                      >
                        following
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="userDescription">
                  <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    paragraph
                  >
                    {this.getProfileDescription(sections)}
                  </Typography>
                </div>
                <div className="userLocationJob">
                  <Grid container direction="row" justify="space-around">
                    <Grid item>
                      <div className="detailIcon">
                        <LocationOnIcon fontSize="large" color="secondary" />
                      </div>
                      <Typography
                        variant="h6"
                        align="center"
                        color="textPrimary"
                      >
                        {location}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <div className="detailIcon">
                        <BusinessCenterIcon
                          fontSize="large"
                          color="secondary"
                        />
                      </div>
                      <Typography
                        variant="h6"
                        align="center"
                        color="textPrimary"
                      >
                        {occupation}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <div className="detailIcon">
                        <PagesIcon fontSize="large" color="secondary" />
                      </div>
                      <Typography
                        variant="h6"
                        align="center"
                        color="textPrimary"
                      >
                        {twitter}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  getData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
