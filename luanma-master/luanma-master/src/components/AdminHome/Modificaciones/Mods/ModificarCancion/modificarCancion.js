import React from "react";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";

import * as actions from "../../../../../actions/req";
import * as selectors from "../../../../../reducers/index";
import makeRequest from "../../../../../requests/requests";

const NewSong = ({
  handleSubmit,
  submitting,
  reqSuccess,
  reqMsg,
  modSuccess,
  loggedUser,
  onSubmit,
  dispatch,
}) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Modifica una Cancion</h1>
        <form
          onSubmit={handleSubmit((values) => {
            values.modifiedBy = loggedUser;
            onSubmit(values, dispatch);
          })}
        >
          <Field
            name="cancion_id"
            className="firsname"
            label="Cancion id de la cancion a modificar"
            component={renderInput}
          ></Field>
          <Field
            name="newtrackname"
            className="firstName"
            label="Nombre nuevo de Cancion"
            component={renderInput}
          />
          <Field
            name="newalbumid"
            className="firsname"
            label="Album id nuevo"
            component={renderInput}
          ></Field>
          <Field
            name="newartistid"
            className="firsname"
            label="artista id nuevo"
            component={renderInput}
          >
            {" "}
          </Field>
          {reqSuccess ? (
            <div className="alert">
              <Alert color="danger">Ups! {reqMsg.msg}</Alert>
            </div>
          ) : null}
          <div className="createAccount">
            <button type="submit" disabled={submitting}>
              Modificar Cancion
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

  if (!values.trackname) {
    error.trackname = "Campo requerido";
  }
  if (!values.unitprice) {
    error.unitprice = "Campo requerido";
  } else if (/\D/.test(values.unitprice)) {
    error.unitprice = "Numero invalido";
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
  form: "updateSongForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    const requestInfo = {
      uri: `http://localhost:8000/track/update`,
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
    albums: selectors.getAlbums(state),
    tracks: selectors.getTracks(state),
    loggedUser: selectors.getUserName(state),
  }))(NewSong)
);
