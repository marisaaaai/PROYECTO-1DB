import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.css";
import * as actions from "../../actions/req";

const ArtistaHome = ({ onClick }) => {
  return (
    <div className="mods-wrapper">
      <h2>Funcionalidades</h2>
      <Link to="/artista-home/mod" className="options" onClick={onClick}>
        <div className="mod-wrapper">
          <h4>Modificaciones</h4>
        </div>
      </Link>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  onClick() {
    dispatch(actions.remReqInfo());
  },
}))(ArtistaHome);
