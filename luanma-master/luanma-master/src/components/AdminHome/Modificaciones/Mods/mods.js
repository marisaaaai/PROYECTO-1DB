import React from "react";
import { Link } from "react-router-dom";
//import './styles.css';
// import * as actions from '../../../actions/req';
// import { connect } from 'react-redux';

const Mods = () => {
  return (
    <div>
      <h2>Modificaciones</h2>
      <div className="mods-wrapper">
        <Link to="/admin-home/mod/mod-cancion" className="options">
          <div className="mod-wrapper">
            <h4>Modificar Cancion</h4>
          </div>
        </Link>
        <Link to="/admin-home/mod/mod-album" className="options">
          <div className="mod-wrapper">
            <h4>Modificar Album</h4>
          </div>
        </Link>
        <Link to="/admin-home/mod/mod-artist" className="options">
          <div className="mod-wrapper">
            <h4>Modificar Artista</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Mods;
