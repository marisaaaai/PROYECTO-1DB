import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import * as actions from "../../../actions/req";
import { connect } from "react-redux";

const playlist = ({ onClick }) => {
  return (
    <div className="mods-wrapper">
      <h2>Playlist</h2>
      <Link to="/comun-home/new-playlist" className="options" onClick={onClick}>
        <div className="mod-wrapper">
          <h4>Crear una playlist</h4>
        </div>
      </Link>
      <Link
        to="/comun-home/add-songsPlaylist"
        className="options"
        onClick={onClick}
      >
        <div className="mod-wrapper">
          <h4>Añadir canciones a playlist</h4>
        </div>
      </Link>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  onClick() {
    dispatch(actions.remReqInfo());
  },
}))(playlist);
