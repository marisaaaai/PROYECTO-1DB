import React from "react";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";

import * as actions from "../../../../actions/req";
import * as selectors from "../../../../reducers/index";
import makeRequest from "../../../../requests/requests";

const NewSong = ({
  handleSubmit,
  submitting,
  reqSuccess,
  reqMsg,
  modSuccess,
  onSubmit,
  dispatch,
}) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Ingresa una Cancion Nueva</h1>
        <form
          onSubmit={handleSubmit((values) => {
            onSubmit(values, dispatch);
          })}
        >
          <Field
            name="nombre"
            className="firstName"
            label="Nombre de Cancion"
            component={renderInput}
          />
          <Field
            name="enlace"
            className="firstName"
            label="Youtube URL"
            component={renderInput}
          />
          <Field
            name="genero"
            className="firstName"
            label="Genero (en minusculas)"
            component={renderInput}
          />
          <Field
            name="artista_id"
            className="firsname"
            label="artista_id"
            component={renderInput}
          />
          <Field
            name="album_id"
            className="firsname"
            label="Album"
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
        {modSuccess ? <Redirect to="/artista-home" /> : null}
      </div>
    </div>
  );
};

const validate = (values) => {
  //Validacion del Register Form

  const error = {};

  if (!values.nombre) {
    error.nombre = "Campo requerido";
  }
  if (!values.enlace) {
    error.enlace = "Campo requerido";
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
  form: "newSongForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    console.log(values);
    const requestInfo = {
      uri: `http://localhost:8000/new-track`,
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
  }))(NewSong)
);
