import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth, * as authSelectors from "./auth";
import tracks, * as tracksSelectors from "./tracks";
import SearchSong, * as searchSongsSelectors from "./SearchSong";
import albums, * as albumsSelectors from "./albums";
import req, * as reqSelectors from "./req";
import artists, * as artistsSelectors from "./artists";
import stats, * as statsSelectors from "./stats";

const reducer = combineReducers({
  auth,
  tracks,
  SearchSong,
  albums,
  req,
  artists,
  stats,
  form: formReducer,
});

export default reducer;

export const getUserName = (state) => authSelectors.getUserName(state.auth);

export const getAuthMsg = (state) => authSelectors.getMsg(state.auth);

export const getIsAuth = (state) => authSelectors.getIsAuth(state.auth);

export const getIsAdminUser = (state) =>
  authSelectors.getIsAdminUser(state.auth);

export const getUserType = (state) => authSelectors.getUserType(state.auth);

export const getTracks = (state) => tracksSelectors.getTracks(state.tracks);

export const getSongsLoaded = (state) =>
  searchSongsSelectors.getSongsLoaded(state.SearchSong);

export const getAlbumByArtist = (state) =>
  searchSongsSelectors.getAlbumByArtist(state.SearchSong);

export const getAlbumByName = (state) =>
  searchSongsSelectors.getAlbumByName(state.SearchSong);

export const getTrackByName = (state) =>
  searchSongsSelectors.getTrackByName(state.SearchSong);

export const getTrackByGenre = (state) =>
  searchSongsSelectors.getTrackByGenre(state.SearchSong);

export const getAlbums = (state) => albumsSelectors.getAlbums(state.albums);

export const getReqSuccess = (state) => reqSelectors.getReqSuccess(state.req);

export const getReqMsg = (state) => reqSelectors.getReqMsg(state.req);

export const getModSuccess = (state) => reqSelectors.getModSuccess(state.req);

export const getArtistsLoaded = (state) =>
  artistsSelectors.getArtistsLoaded(state.artists);

export const getArtists = (state) => artistsSelectors.getArtists(state.artists);

export const getLoadingStats = (state) =>
  statsSelectors.getIsLoading(state.stats);

export const getStats = (state, graphNum) =>
  statsSelectors.getStats(state.stats, graphNum);

export const getGraph1 = (state) => statsSelectors.getGraph1(state.stats);
export const getGraph2 = (state) => statsSelectors.getGraph2(state.stats);
export const getGraph3 = (state) => statsSelectors.getGraph3(state.stats);
export const getGraph4 = (state) => statsSelectors.getGraph4(state.stats);
export const getGraph5 = (state) => statsSelectors.getGraph5(state.stats);
export const getGraph6 = (state) => statsSelectors.getGraph6(state.stats);
