import "../../Css/HomePage/Card.css";

const Card = (props) => {
  const { pokemonSelected } = props;

  return (
    <div id="CardInfo">
      <div className="container">
        <img id="CardInfo__img" src={`${pokemonSelected.urlSprite}`} alt="" />
        <h1 id="CardInfo__name">{pokemonSelected.name}</h1>
        <div id="CardInfo__tipesDiv">
          <h3>{pokemonSelected.type1}</h3>
          {pokemonSelected.type2 !== "" ? <h3>{pokemonSelected.type2}</h3> : ""}
        </div>
        <p id="CardInfo__description">{pokemonSelected.description}</p>
        {pokemonSelected.number > 0 ? (
          <PokemonData
            pokemonSelected={props.pokemonSelected}
            PrevNextPokemon={props.PrevNextPokemon}
          />
        ) : (
          <UserLinks />
        )}
      </div>
    </div>
  );
};

const UserLinks = () => {
  return (
    <div id="UserLinks">
      <a href="https://mexil77.github.io/portafolio/">My Proyects</a>
    </div>
  );
};

const PokemonData = (props) => {
  const { pokemonSelected } = props;
  return (
    <div id="PokemonData">
      <div id="CardInfo__statsTable">
        <h2>Base Stats</h2>
        <ul>
          <li>
            <p>HP</p>
            <p>{pokemonSelected.stats.HP}</p>
          </li>
          <li>
            <p>ATf</p>
            <p>{pokemonSelected.stats.ATf}</p>
          </li>
          <li>
            <p>DFf</p>
            <p>{pokemonSelected.stats.DFf}</p>
          </li>
          <li>
            <p>ATs</p>
            <p>{pokemonSelected.stats.ATs}</p>
          </li>
          <li>
            <p>DFs</p>
            <p>{pokemonSelected.stats.DFs}</p>
          </li>
          <li>
            <p>SP</p>
            <p>{pokemonSelected.stats.SP}</p>
          </li>
        </ul>
      </div>
      <div id="CardInfo__foother">
        <img
          onClick={() => props.PrevNextPokemon("prev")}
          src="https://img.icons8.com/nolan/64/previous.png"
          alt=""
        />
        <img
          onClick={() => props.PrevNextPokemon("next")}
          src="https://img.icons8.com/nolan/64/next.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
