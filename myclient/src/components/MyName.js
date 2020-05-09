import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/myName";
import { TextField, withStyles } from "@material-ui/core";
import useForm from "./useForm";

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

const initialFieldValues = {
    fullName: 'IVAN',
}

const MyName = ({ classes, ...props }) => {
  

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
        temp.fullName = (/[A-zА-яЁё]/).test(fieldValues.fullName) ? "" : "fullName is not valid."
    setErrors({
        ...temp
    })
    if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
}

const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
} = useForm(initialFieldValues, validate, props.setCurrentName)

useEffect(() => {
    props.fetchName(values.fullName);
  }); //componentDidMount

  return (
    <>
    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Введите имя"
                        value={values.fullName}
                        onChange={handleInputChange}
                        {...(errors.fullName && { error: true, helperText: errors.fullName })}
                    />
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
