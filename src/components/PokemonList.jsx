import React, { useState, useEffect } from "react";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  return <div className="pokemon-list"></div>;
}

export default PokemonList;
