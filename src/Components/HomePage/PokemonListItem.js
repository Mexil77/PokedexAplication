import "../../Css/HomePage/PokemonListItem.css";

const PokemonListItem = (props) => {
  const { index, pokemon, selectPokemon } = props;

  return (
    <div onClick={() => selectPokemon(pokemon)} className="PokemonListItem">
      <ul>
        <li>
          <img src={`${pokemon.urlSprite}`} alt="" />
        </li>
        <li>
          <p>{pokemon.name}</p>
          <p>{pokemon.type1}</p>
          <p>{pokemon.type2}</p>
        </li>
        <li>{pokemon.description}</li>
        <li>{index}</li>
      </ul>
    </div>
  );
};

export default PokemonListItem;
