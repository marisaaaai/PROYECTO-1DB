import React from "react";
import { Link, Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import * as selectors from "../../reducers/index";
import "./styles.css";
// import makeRequest from "../../requests/requests";

const Nav = ({ onClick, isLoggedIn, userType }) => {
  return (
    <nav>
      {!isLoggedIn ? <h2>LuanMa</h2> : null}
      {isLoggedIn && userType === "admin" ? (
        <Link to="/admin-home">
          <h2>LuanMa</h2>
        </Link>
      ) : null}
      {isLoggedIn && userType === "comun" ? (
        <Link to="/user-home">
          <h2>LuanMa</h2>
        </Link>
      ) : null}
      <ul className="nav-links">
        {isLoggedIn && userType === "comun" ? (
          <li>
            <SearchBox />
          </li>
        ) : null}
        {/* {isLoggedIn && userType === "admin" ? (
            <Link to="/admin-home/mods">
              <li>Modificaciones</li>
            </Link>
          ) : null}
          {isLoggedIn && isAdminUser ? (
            <Link to="/admin-home/stats">
              <li>Estadisticas</li>
            </Link>
          ) : null}
        
          {isLoggedIn && isAdminUser ? (
            <Link to="/admin-home/new-stats">
              <li>New Stats</li>
            </Link>
          ) : null} */}

        {/* {isLoggedIn && userType === "comun" ? (
            <Link to="/my-songs" onClick={() => onSubmit(currentUser)}>
              <FontAwesomeIcon icon={faPlay} />
            </Link>
          ) : null}
          */}
        {isLoggedIn ? (
          <Link to="/" onClick={onClick}>
            <li>Logout</li>
          </Link>
        ) : null}
      </ul>
    </nav>
  );
};

export default connect(
  (state) => ({
    isLoggedIn: selectors.getIsAuth(state),
    userType: selectors.getUserType(state),
    //   isAdminUser: selectors.getIsAdminUser(state),
    currentUser: selectors.getUser(state),
  }),
  (dispatch) => ({
    onClick() {
      dispatch(actions.logout());
      // dispatch(myTracksActions.removeMyTracks());
      // dispatch(shoppingCartActions.removeShoppingcartList());
    },
    //   onSubmit(currentUser) {
    //     const requestInfo = {
    //       uri: `http://localhost:8000/get-my-songs/${currentUser}`,
    //       type: "GET",
    //     };
    //     makeRequest(null, requestInfo, (res) => {
    //       dispatch(myTracksActions.getMyTracks(res.action));
    //     });
    //   },
  })
)(Nav);
