import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
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

  getProfileDescription(data) {
    if (data == null) {
      return <CircularProgress color="primary" />;
    }
    const descObject = data.user.sections;
    const description =
      descObject[Object.keys(descObject)[Object.keys(descObject).length - 1]];

    const x = description.split(".");
    if (x.length >= 2) {
      return x[0] + "." + x[1]+ ".";
    }
    return x[0];
  }

  getProfilePicture(data) {
    if (data == null) {
      return <CircularProgress color="primary" />;
    }
    const pictureObject = data.user.images;
    const imageUrl =
      pictureObject[
        Object.keys(pictureObject)[Object.keys(pictureObject).length - 1]
      ];
    return imageUrl;
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <React.Fragment>
        <main>
          <div className="userInfo">
            <Grid container spacing={40}>
              <Grid item xs={3} align="center">
                <div className="userImageName">
                  <a
                    href={
                      data == null ? (
                        <CircularProgress color="primary" />
                      ) : (
                        data.user.url
                      )
                    }
                  >
                    <img
                      className="img"
                      alt="complex"
                      src={this.getProfilePicture(data)}
                    />
                  </a>
                  <Typography
                    variant="h5"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    {data == null ? (
                      <CircularProgress color="primary" />
                    ) : (
                      data.user.display_name
                    )}
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
                          {data == null ? (
                            <CircularProgress color="primary" />
                          ) : (
                            data.user.stats.views
                          )}
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
                          {data == null ? (
                            <CircularProgress color="primary" />
                          ) : (
                            data.user.stats.followers
                          )}
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
                          {data == null ? (
                            <CircularProgress color="primary" />
                          ) : (
                            data.user.stats.following
                          )}
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
                      {this.getProfileDescription(data)}
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
                          {data == null ? (
                            <CircularProgress color="primary" />
                          ) : (
                            data.user.location
                          )}
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
                          {data == null ? (
                            <CircularProgress color="primary" />
                          ) : (
                            data.user.occupation
                          )}
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
                          {data == null ? (
                            <CircularProgress color="primary" />
                          ) : (
                            data.user.twitter
                          )}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default UserInfo;
