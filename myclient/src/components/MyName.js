import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/myName";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  name: {
      color: "red",
      fontSize: 500,
  },
});

const MyName = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchName();
  }); //componentDidMount

  return (
    <>
    {props.MyName ? (
      <div className={classes.name}>{props.MyName.name}</div>
    ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  MyName: state.myName.NAME,
});

const mapActionToProps = {
  fetchName: actions.fetchMyName
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(MyName));
