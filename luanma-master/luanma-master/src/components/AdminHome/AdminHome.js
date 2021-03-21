import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import * as actions from "../../actions/req";
import { connect } from "react-redux";

const AdminHome = ({ onClick }) => {
  return (
    <div className="mods-wrapper">
      <h2>Funcionalidades</h2>
      <Link to="/admin-home/mod" className="options" onClick={onClick}>
        <div className="mod-wrapper">
          <h4>Modificaciones</h4>
        </div>
      </Link>
      <Link to="/admin-home/stats" className="options" onClick={onClick}>
        <div className="mod-wrapper">
          <h4>Estadisticas</h4>
        </div>
      </Link>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  onClick() {
    dispatch(actions.remReqInfo());
  },
}))(AdminHome);
