import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import isValidEmail from "sane-email-validation";
import { Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import "./styles.css";

import makeRequest from "../../requests/requests";

import * as actions from "../../actions/auth";
import * as selectors from "../../reducers/index";

const Register = ({ handleSubmit, submitting, error, isAuth, onClick }) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Ingresa tus datos</h1>
        <form onSubmit={handleSubmit}>
          <Field
            name="usuario_id"
            className="usuario_id"
            label="nombre de usuario"
            component={renderInput}
          />
          <Field
            name="correo"
            className="correo"
            label="Correo Electronico"
            component={renderInput}
          />
          <Field
            name="contrasena"
            type="contrasena"
            label="Contraseña"
            component={renderInput}
          />
          <div className="field">
            <label>Nombres</label>
            <Field
              name="nombreUsuario"
              type="nombreUsuario"
              label="Nombres"
              component="input"
              placeholder="Nombres"
            />
          </div>
          <div className="field">
            <label>Suscripcion *Ingrese 0 si no quiere sus y 1 si si</label>
            <Field
              name="suscripcion"
              type="suscripcion"
              label="suscripcion"
              component="input"
              placeholder="suscripcion"
            />
          </div>
          {error ? (
            <div className="alert">
              <Alert color="danger">Ups! {error}</Alert>
            </div>
          ) : null}
          <div className="createAccount">
            <button type="submit" disabled={submitting}>
              Crear Cuenta
            </button>
            <Link to="/" onClick={onClick}>
              <small>¿Ya tienes una cuenta?</small>
            </Link>
          </div>
        </form>
        {isAuth ? <Redirect to="/comun-home" /> : null}
      </div>
    </div>
  );
};
const validate = (values) => {
  //Validacion del Register Form

  const error = {};

  if (!values.firstName) {
    error.firstName = "Campo requerido";
  }
  if (!values.lastName) {
    error.lastName = "Campo requerido";
  }
  if (!values.emailAddress) {
    error.emailAddress = "Campo requerido";
  } else if (!isValidEmail(values.emailAddress)) {
    error.emailAddress = "Correo electronico invalido";
  }
  if (!values.password) {
    error.password = "Campo requerido";
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
  form: "registerForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    dispatch(actions.loadUser());
    console.log(values);
    //Info de la request
    const requestInfo = { uri: "http://localhost:8000/users", type: "POST" };
    makeRequest(values, requestInfo, (res) => {
      dispatch(actions.registerUser(res.action));
    });
  },
  validate,
})(
  connect(
    (state) => ({
      error: selectors.getAuthMsg(state),
      isAuth: selectors.getIsAuth(state),
    }),
    (dispatch) => ({
      onClick() {
        dispatch(actions.clearError());
      },
    })
  )(Register)
);
