import React from "react";
import "./index.css";

export default function PokemonList({ pokemon }) {
  return (
    <div className="container">
      {pokemon.map((p) => (
        <div className="pokemon" key={p}>
          {p.charAt(0).toUpperCase() + p.slice(1)}
        </div>
      ))}
    </div>
  );
}
