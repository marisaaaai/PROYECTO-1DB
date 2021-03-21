import React from "react";
import { Link, Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import makeRequest from "../../requests/requests";
import * as actions from "../../actions/SearchSong";

const Search = ({ handleSubmit, submitting }) => {
  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <Field
          name="searchValue"
          type="text"
          className="search-text"
          placeholder="Search"
          component={renderInput}
        />
        <button className="search-btn" disabled={submitting}>
          ?
        </button>
      </form>
    </div>
  );
};

const renderInput = ({ input }) => (
  <div>
    <input {...input} className="search-text" />
  </div>
);

const validate = (values) => {
  //Validacion del Register Form

  const error = {};

  if (!values.searchValue) {
    error.searchValue = "Campo requerido";
  }

  return error;
};

export default reduxForm({
  form: "searchForm",
  destroyOnUnmount: false,
  onSubmit(values, dispatch) {
    //CARCARG BUSQUEDA DE CANCION, ALBUM, ETC.
    const requestInfo = {
      uri: `http://localhost:8000/search/${values.searchValue}`,
      type: "GET",
    };
    makeRequest(values, requestInfo, (res) => {
      dispatch(actions.loadSongs(res.action));
    });
  },
  validate,
})(Search);
