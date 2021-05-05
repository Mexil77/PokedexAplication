import "../../Css/HomePage/PokemonList.css";

import PokemonListItem from "./PokemonListItem";

const PokemonList = (props) => {
  const { pokemons, selectPokemon } = props;
  return (
    <div id="PokemonList">
      {pokemons.length === 0 && (
        <div id="imgLoadingDiv">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
            alt=""
          />
        </div>
      )}
      {pokemons.map((pokemon) => (
        <PokemonListItem
          key={pokemon.number}
          index={pokemon.number}
          pokemon={pokemon}
          selectPokemon={selectPokemon}
        />
      ))}
    </div>
  );
};

export default PokemonList;
