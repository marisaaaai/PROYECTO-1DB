import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import * as selectors from "../../../reducers";

import "./styles.css";
import makeRequest from "../../../requests/requests";

const itemStyle = {
  padding: "20px",
  borderRadius: "40px",
  margin: "20px",
  marginBottom: "50px",
  background: "#a62525",
};

const Track = ({ track, myTrack, onPlay, currentUser }) => {
  if (track) {
    return (
      <a
        href={track.link}
        target="_blank"
        onClick={() => onPlay(track.id, currentUser)}
      >
        <div className="" style={itemStyle}>
          <img
            classname=""
            src="http://cdn.onlinewebfonts.com/svg/img_19932.png"
          />
          <div className="">
            <h5 className="">{track.nombre}</h5>
            <hr></hr>
            <div className="info">
              <div className="">
                <div className="">Artista:</div>
                <div className="">{track.artista}</div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </a>
    );
  }
  if (myTrack) {
    return (
      <a
        href={myTrack.url}
        target="_blank"
        onClick={() => onPlay(myTrack.id, currentUser)}
      >
        <div className="" style={itemStyle}>
          <img
            classname=""
            src="http://cdn.onlinewebfonts.com/svg/img_19932.png"
          />
          <div className="">
            <h5 className="">{myTrack.name}</h5>
            <hr></hr>
            <div className="info">
              <div className="">
                {myTrack.artist ? (
                  <div>
                    <div className="">Artista:</div>
                    <div className="">{myTrack.artista}</div>
                  </div>
                ) : null}
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </a>
    );
  }
};

export default connect(
  (state) => ({
    currentUser: selectors.getUserName(state),
  }),
  (dispatch) => ({
    onPlay(trackId, currentUser) {
      const values = { trackId, currentUser };
      console.log(values);
      const requestInfo = {
        uri: `http://localhost:8000/add-rep`,
        type: "PUT",
      };
      makeRequest(values, requestInfo, (res) => {
        console.log(res);
      });
    },
  })
)(Track);
