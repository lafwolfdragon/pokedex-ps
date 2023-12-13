import React from "react";
import '../styles/Pokemon.css'

function Pokemon (props) {
  return (
    <div className="contenedor-pokemon">
      <img
        className="imagen-pokemon"
        src={(`../pokeimg/${props.imagen}.png`)}
        alt="Foto de pokemon"/>
      <div className="info-pokemon">
        <div className="id-pokemon">N°{props.id}</div>
        <div className="nombre-pokemon"><strong>{props.nombre}</strong></div>
        <div className="tipos-pokemon">
          <div className="tipos-pokemon">{props.tipo1}</div>
          <div className="tipos-pokemon">{props.tipo2}</div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon