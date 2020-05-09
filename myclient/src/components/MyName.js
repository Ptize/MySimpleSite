import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/myName";
import { withStyles, Typography } from "@material-ui/core";

const styles = (theme) => ({
  name: {
    'min-height': '100vh',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'font-size': 'calc( 16px + (130 - 16) * (100vw - 400px) / (800 - 400) )',
    color: 'red',
  },
});

const MyName = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchName("IVAN");
  }); //componentDidMount

  return (
    <>
      {props.MyName ? (
        <div className={classes.name}>
            {props.MyName.name}
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  MyName: state.myName.NAME,
});

const mapActionToProps = {
  fetchName: actions.fetchMyName,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(MyName));
