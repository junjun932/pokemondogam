import { Dashboard } from "../components/Dashboard";
import { PoketmonList } from "../components/PoketmonList";
import pokemonData from "../mock";
import { useState } from "react";

const Dex = () => {
  const [selectPokemonList, setSelectPokemonList] = useState([]);

  const addPokemon = (pokemon) => {
    setSelectPokemonList(() => {
      if (selectPokemonList.find((list) => list.id === pokemon.id)) {
        alert("중복된 폿켓몬이 있습니다");
        return [...selectPokemonList];
      }

      return [...selectPokemonList, pokemon];
    });
    console.log(selectPokemonList);
  };

  const removePokemon = (pokemon) => {
    setSelectPokemonList(() => {
      return selectPokemonList.filter((list) => list.id !== pokemon.id);
    });
  };

  return (
    <>
      <Dashboard
        selectPokemonList={selectPokemonList}
        removePokemon={removePokemon}
      />
      <hr />
      <hr />
      <hr />
      <PoketmonList pokemonData={pokemonData} addPokemon={addPokemon} />
    </>
  );
};

export default Dex;
