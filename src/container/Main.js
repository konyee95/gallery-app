import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Typography from "@material-ui/core/Typography";

class Main extends Component {
  constructor(props) {
    super(props);
    this.hasLoaded = this.hasLoaded.bind(this);
  }

  componentDidMount() {
    this.props.getData("matiascorea");
  }

  hasLoaded() {
    const { loaded, error } = this.props.user;
    if (loaded === true && error === null) {
      return <Gallery />;
    } else if (loaded === null && error === null) {
      return <div className="errorContainer"><Loading /></div>;
    } else {
        if (error.status === 501){
          return (
            <div className="errorContainer">
                <img src={require("../images/404.gif")} alt="404 gif"/>
                <Typography
                    variant="h5"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Please install CORS plugin...
                </Typography>
            </div> 
          );
        }else if (error.status === 404){
          return (
              <div className="errorContainer">
                  <img src={require("../images/404.gif")} alt="404 gif"/>
                  <Typography
                      variant="h5"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                  >
                      Oops, User not exist. Please try again
                  </Typography>
              </div> 
                );
        }
      
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.hasLoaded()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

const mapDispatchToProps = {
  getData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
