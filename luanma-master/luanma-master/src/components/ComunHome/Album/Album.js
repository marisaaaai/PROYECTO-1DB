import React from "react";
import { connect } from "react-redux";

const itemStyle = {
  padding: "20px",
  borderRadius: "40px",
  margin: "20px",
  marginBottom: "50px",
  background: "#a62525",
};

const Album = ({ album }) => {
  return (
    <div className="jumbotron media" style={itemStyle}>
      <img
        classname=""
        src="https://cdn.onlinewebfonts.com/svg/img_375331.png"
      />
      <div className="media-body">
        <h5 className="mt-0">{album.nombre}</h5>
        <hr></hr>
        <div className="info">
          <div>
            <div className="col-7">Artista:</div>
            <div className="col-4">{album.artista}</div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  // onClick(album) {
  //   dispatch(actions.addAlbum(album));
  // },
}))(Album);
