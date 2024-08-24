export const PokemonCard = ({
  pokemon,
  addPokemon,
  removePokemon,
  isSelect,
}) => {
  return (
    <div>
      <img src={pokemon.img_url} />
      <h2>{pokemon.korean_name}</h2>
      {isSelect ? (
        <button type="buttoN" onClick={() => removePokemon(pokemon)}>
          삭제
        </button>
      ) : (
        <button type="button" onClick={() => addPokemon(pokemon)}>
          추가
        </button>
      )}
    </div>
  );
};
