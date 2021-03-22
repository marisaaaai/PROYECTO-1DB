import React from "react";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";

import * as actions from "../../../../actions/req";
import * as selectors from "../../../../reducers/index";
import makeRequest from "../../../../requests/requests";

const Newplaylist = ({
  handleSubmit,
  submitting,
  reqSuccess,
  reqMsg,
  modSuccess,
  onSubmit,
  dispatch,
}) => {
  //TODO Agregar usuario a consulta
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Ingresa canciones a tu Playlist</h1>
        <form
          onSubmit={handleSubmit((values) => {
            onSubmit(values, dispatch);
          })}
        >
          <Field
            name="playlist_id"
            className="firstName"
            label="Id de la PLaylist para agregar canciones"
            component={renderInput}
          />
          <Field
            name="cancion_id"
            className="firstName"
            label="Id de la cancion para agregar a la Playlist"
            component={renderInput}
          />
          {reqSuccess ? (
            <div className="alert">
              <Alert color="danger">Ups! {reqMsg.msg}</Alert>
            </div>
          ) : null}
          <div className="createAccount">
            <button type="submit" disabled={submitting}>
              Agregar Cancion
            </button>
          </div>
        </form>
        {modSuccess ? <Redirect to="/comun-home/playlist" /> : null}
      </div>
    </div>
  );
};

const validate = (values) => {
  //Validacion del Register Form

  const error = {};

  if (!values.playlist_id) {
    error.playlist_id = "Campo requerido";
  }
  if (!values.cancion_id) {
    error.cancion_id = "Campo requerido";
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
  form: "newPlaylistForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    console.log(values);
    const requestInfo = {
      uri: `http://localhost:8000/playlist-newsong`,
      type: "POST",
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
    loggeduser: selectors.getUserName(state),
  }))(Newplaylist)
);
