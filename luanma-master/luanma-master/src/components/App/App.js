import Login from "../Login/Login";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { configureStore } from "../../store";
import ComunHome from "../ComunHome/ComunHome";
import ArtistaHome from "../ArtistaHome/ArtistaHome";
import AdminHome from "../AdminHome/AdminHome";
import Register from "../register/register";
import newSong from "../ArtistaHome/Modificaciones/NewSong/newSong";
import newAlbum from "../ArtistaHome/Modificaciones/NewAlbum/newAlbum";
import newArtist from "../ArtistaHome/Modificaciones/New Artist/newArtist";
import modificarArtistas from "../AdminHome/Modificaciones/Mods/ModificarArtista/modificarArtistas";
import mods from "../AdminHome/Modificaciones/modificaciones";
import modss from "../AdminHome/Modificaciones/Mods/mods";
import modificarAlbum from "../AdminHome/Modificaciones/Mods/ModificarAlbum/modificarAlbum";
import modificarCancion from "../AdminHome/Modificaciones/Mods/ModificarCancion/modificarCancion";
import inactSong from "../AdminHome/Modificaciones/Inact/inact";
import deleteMod from "../AdminHome/Modificaciones/Delete/delete";
import deleteAlbum from "../AdminHome/Modificaciones/Delete/DeleteAlbum/deleteAlbum";
import deleteArtista from "../AdminHome/Modificaciones/Delete/DeleteArtista/deleteArtista";
import deleteSong from "../AdminHome/Modificaciones/Delete/DeleteSong/deleteSongs";
import modArtista from "../ArtistaHome/Modificaciones/modificaciones";
import stats from "../AdminHome/Stats/stats";
import NewPlaylist from "../ComunHome/Playlist/NewPlaylist/newPlaylist";
import playlist from "../ComunHome/Playlist/playlist";
import addSongs from "../ComunHome/Playlist/AddSongs/addSongs";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/comun-home" exact component={ComunHome} />
        <Route path="/admin-home" exact component={AdminHome} />
        <Route path="/artista-home" exact component={ArtistaHome} />
        <Route path="/artista-home/mod" exact component={modArtista} />
        <Route path="/artista-home/mod/new-song" component={newSong} />
        <Route path="/artista-home/mod/new-album" component={newAlbum} />
        <Route path="/artista-home/mod/new-artist" component={newArtist} />
        <Route
          path="/admin-home/mod/mod-artist"
          component={modificarArtistas}
        />
        <Route path="/admin-home/mod" component={mods} />
        <Route path="/admin-home/mod/modss" exact component={modss} />
        <Route path="/admin-home/mod/mod-album" component={modificarAlbum} />
        <Route
          path="/admin-home/mod/mod-cancion"
          component={modificarCancion}
        />
        <Route path="/admin-home/mod/inact-song" component={inactSong} />
        <Route path="/admin-home/mod/delete" component={deleteMod} />
        <Route path="/admin-home/mods/delete/album" component={deleteAlbum} />
        <Route
          path="/admin-home/mods/delete/artist"
          component={deleteArtista}
        />
        <Route path="/admin-home/mods/delete/song" component={deleteSong} />
        <Route path="/admin-home/stats" component={stats} />
        <Route path="/comun-home/new-playlist" component={NewPlaylist} />
        <Route path="/comun-home/playlist" component={playlist} />
        <Route path="/comun-home/add-songsPlaylist" component={addSongs} />
      </Router>
    </Provider>
  );
}

export default App;
