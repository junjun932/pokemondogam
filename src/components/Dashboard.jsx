import { PokemonCard } from "./PokemonCard";

export const Dashboard = ({ selectPokemonList, removePokemon }) => {
  console.log("selectPokemonList=>", selectPokemonList);
  return (
    <>
      {selectPokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            removePokemon={removePokemon}
            isSelect={true}
          />
        );
      })}
    </>
  );
};
