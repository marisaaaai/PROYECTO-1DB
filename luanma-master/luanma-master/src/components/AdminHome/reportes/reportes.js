import React from "react";
import { connect } from "react-redux";
import * as selectors from "../../../reducers/index";
import "./styles.css";

const Reportes = ({ graph1, graph2, graph3, graph4, graph5, graph6 }) => {
  console.log(Object.entries(graph1));
  return (
    <div>
      <div className="stats-container">
        <h1> Reporte 1 </h1>
        <h2 className="sub-title">Albúmes más recientes de la última semana</h2>
        {Object.entries(graph1).map(([key, value]) => {
          console.log(value);
          return (
            <div key={key} className="stats_g1">
              <h3 className="album_title">Album:</h3>
              <p>{value.nombre}</p>
            </div>
          );
        })}
      </div>
      <div className="stats-container">
        <h1> Reporte 2 </h1>
        <h2 className="sub-title">Artista creciente en los ultimos 3 meses</h2>
        {Object.entries(graph2).map(([key, value]) => {
          console.log(value);
          return (
            <div key={key} className="stats_g1">
              <h3 className="album_title">Artistas:</h3>
              <p>{value.nombre}</p>
            </div>
          );
        })}
      </div>
      <div className="stats-container">
        <h1> Reporte 3 </h1>
        <h2 className="sub-title">
          Cantidad de Suscripciones en los últimos 6 meses
        </h2>
        {Object.entries(graph3).map(([key, value]) => {
          console.log(value);
          return (
            <div key={key} className="stats_g1">
              <h3 className="album_title">Cantidad:</h3>
              <p>{value.cantidadsuscripciones}</p>
            </div>
          );
        })}
      </div>
      <div className="stats-container">
        <h1> Reporte 4 </h1>
        <h2 className="sub-title">Artistas con mayor producción</h2>
        {Object.entries(graph4).map(([key, value]) => {
          console.log(value);
          return (
            <div key={key} className="stats_g1">
              <h3 className="album_title">Artista:</h3>
              <p>{value.nombre}</p>
            </div>
          );
        })}
      </div>
      <div className="stats-container">
        <h1> Reporte 5 </h1>
        <h2 className="sub-title">Géneros más populares</h2>
        {Object.entries(graph5).map(([key, value]) => {
          console.log(value);
          return (
            <div key={key} className="stats_g1">
              <h3 className="album_title">Genero:</h3>
              <p>{value.genero}</p>
            </div>
          );
        })}
      </div>
      <div className="stats-container">
        <h1> Reporte 6 </h1>
        <h2 className="sub-title">Usuarios más activos en la plataforma</h2>
        {Object.entries(graph6).map(([key, value]) => {
          console.log(value);
          return (
            <div key={key} className="stats_g1">
              <h3 className="album_title">Usuarios:</h3>
              <p>{value.correo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default connect((state) => ({
  graph1: selectors.getGraph1(state),
  graph2: selectors.getGraph2(state),
  graph3: selectors.getGraph3(state),
  graph4: selectors.getGraph4(state),
  graph5: selectors.getGraph5(state),
  graph6: selectors.getGraph6(state),
}))(Reportes);
