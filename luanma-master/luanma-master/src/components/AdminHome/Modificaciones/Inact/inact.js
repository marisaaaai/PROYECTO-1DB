import React from "react";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";

import * as actions from "../../../../actions/req";
import * as selectors from "../../../../reducers/index";
import makeRequest from "../../../../requests/requests";

const InactSong = ({
  handleSubmit,
  submitting,
  reqSuccess,
  reqMsg,
  modSuccess,
}) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Selecciona Cancion a Inactivar</h1>
        <form onSubmit={handleSubmit}>
          <Field
            name="cancion_id"
            className="firstname"
            label="Cancion id a inactivar"
            component={renderInput}
          ></Field>
          {reqSuccess ? (
            <div className="alert">
              <Alert color="danger">Ups! {reqMsg.msg}</Alert>
            </div>
          ) : null}
          <div className="createAccount">
            <button type="submit" disabled={submitting}>
              Inactiva Cancion
            </button>
          </div>
        </form>
        {modSuccess ? <Redirect to="/admin-home" /> : null}
      </div>
    </div>
  );
};

const validate = (values) => {
  //Validacion del Register Form

  const error = {};

  if (!values.trackid) {
    error.trackid = "Campo requerido";
  }

  return error;
};

const renderInput = ({ input, meta, label }) => (
  <div className="field">
    <label>{label}</label>
    <input
      {...input}
      className={[
        meta.active ? "active" : "",
        meta.error && meta.touched ? "error" : "",
        meta.active && meta.error ? "active" : "",
      ].join("")}
      placeholder={label}
    />
    {meta.error && meta.touched && (
      <span className="errorMessage">{meta.error}</span>
    )}
  </div>
);

export default reduxForm({
  form: "inactSongForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    const requestInfo = {
      uri: `http://localhost:8000/track/inactivate`,
      type: "PUT",
    };
    makeRequest(values, requestInfo, (res) => {
      dispatch(actions.doRequest(res.action));
    });
  },
  validate,
})(
  connect((state) => ({
    reqSuccess: selectors.getReqSuccess(state),
    reqMsg: selectors.getReqMsg(state),
    modSuccess: selectors.getModSuccess(state),
    tracks: selectors.getTracks(state),
  }))(InactSong)
);
