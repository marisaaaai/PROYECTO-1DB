/*
Routers

Rutas para acceder al API

*/

const { Router } = require("express");
const router = Router();

const {
  getUsers,
  getAlbums,
  getArtists,
  getTracks,
  getUserById,
  getPlaylist,
  getSongsinPlaylist,
  getStats,
  createUser,
  newPlaylist,
  deleteTrack,
  deleteArtist,
  deleteAlbum,
  newArtist,
  newAlbum,
  newTrack,
  insertSongPlaylist,
  inacTrack,
  updateTrack,
  updateArtist,
  updateAlbum,
  search,
  addReproduction,
} = require("../controllers/index");

//Aqui van todas las rutas para hacer las requests al API de Postgres
//Mediante router se define que tipo de REQUEST es .get, .post, .put, .delete, etc.

router.get("/users", getUsers);
router.get("/albums", getAlbums);
router.get("/artists", getArtists);
router.get("/tracks", getTracks);
router.get("/user/:correo/:contrasena", getUserById);
router.get("/search/:searchValue", search);
router.get("/playlists", getPlaylist);
router.get("/songsinplaylist", getSongsinPlaylist);
router.get("/stats", getStats);
router.post("/users", createUser);
router.post("/new-playlist", newPlaylist);
router.post("/new-artist", newArtist);
router.post("/new-album", newAlbum);
router.post("/new-track", newTrack);
router.post("/playlist-newsong", insertSongPlaylist);
router.put("/track/inactivate", inacTrack);
router.put("/track/update", updateTrack);
router.put("/artist/update", updateArtist);
router.put("/album/update", updateAlbum);
router.put("/add-rep", addReproduction);
router.delete("/track/delete/:trackid", deleteTrack);
router.delete("/artist/delete/:artista_id", deleteArtist);
router.delete("/album/delete/:album_id", deleteAlbum);

//
module.exports = router;
