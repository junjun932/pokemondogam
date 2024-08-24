import { PokemonCard } from "./PokemonCard";

export const PoketmonList = ({ pokemonData, addPokemon }) => {
  return (
    <>
      {pokemonData.map((pokemon) => {
        return (
          <>
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              addPokemon={addPokemon}
              isSelect={false}
            />
          </>
        );
      })}
    </>
  );
};
