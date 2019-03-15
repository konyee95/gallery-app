import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { updateName, getData } from "../actions";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.user);
  }

  componentWillReceiveProps(props) {
    console.log(props.names)
  }

  handleChange(event) {
    this.props.updateName(event.target.value);
  }

  handleKeyUp(event) {
    if (event.charcode === 13 || event.key === 'Enter') {
      console.log("clicked enter")
      console.log(event.target.value)
      this.props.getData(event.target.value)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="primary" className="appBar">
          <Toolbar variant="dense">
            <IconButton
              className="menuButton"
              color="inherit"
              aria-label="Menu"
            >
              <ImageIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Gallery Web App
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by username"
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 150,
      "&:focus": {
        width: 220
      }
    }
  }
});

const mapStateToProps = state => {
  return {
    names: state.names,
    user: state.user
  }
}

const mapDispatchToProps = {
  updateName,
  getData
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Header);