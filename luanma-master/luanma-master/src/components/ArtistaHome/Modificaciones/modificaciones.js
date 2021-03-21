import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import * as actions from "../../../actions/req";
import { connect } from "react-redux";

const Mods = ({ onClick }) => {
  return (
    <div className="mods-wrapper">
      <h2>Modificaciones</h2>
      <Link
        to="/artista-home/mod/new-song"
        className="options"
        onClick={onClick}
      >
        <div className="mod-wrapper">
          <h4>Añadir nueva cancion a la BD</h4>
        </div>
      </Link>
      <Link
        to="/artista-home/mod/new-album"
        className="options"
        onClick={onClick}
      >
        <div className="mod-wrapper">
          <h4>Añadir nuevo album a la BD</h4>
        </div>
      </Link>
      <Link
        to="/artista-home/mod/new-artist"
        className="options"
        onClick={onClick}
      >
        <div className="mod-wrapper">
          <h4>Añadir nuevo artista al catalogo</h4>
        </div>
      </Link>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  onClick() {
    dispatch(actions.remReqInfo());
  },
}))(Mods);
