import React, { Component } from "react";
import axios from "axios";

import "../../Css/HomePage/Home.css";

import Card from "./Card";
import PokemonList from "./PokemonList";

export default class Home extends Component {
  state = {
    pokemons: [],
    pokemonSelected: {
      number: 0,
      urlSprite: "https://i.imgur.com/0u8xXQC.png",
      name: "Emmanuel G.",
      type1: "",
      type2: "",
      description:
        "Web developer, focused on React and with 2 projects where I have applied everything I learned in the last 2 years, from the back-end to the front-end",
      stats: {
        HP: 0,
        ATf: 0,
        DFf: 0,
        ATs: 0,
        DFs: 0,
        SP: 0,
      },
    },
  };

  numPokemons = 151;

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    const pokemons = [];
    for (let i = 1; i <= this.numPokemons; i++) {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URI}pokemon/${i}`
      );
      const res = await axios.get(
        `${process.env.REACT_APP_URI}pokemon-species/${i}`
      );
      const pokemonCardInfo = {
        number: i,
        urlSprite: data.sprites.front_default,
        name: data.name,
        type1: data.types[0].type.name,
        type2: data.types.length > 1 && data.types[1].type.name,
        description: res.data.flavor_text_entries[0].flavor_text,
        stats: {
          HP: data.stats[0].base_stat,
          ATf: data.stats[1].base_stat,
          DFf: data.stats[2].base_stat,
          ATs: data.stats[3].base_stat,
          DFs: data.stats[4].base_stat,
          SP: data.stats[5].base_stat,
        },
      };
      pokemons.push(pokemonCardInfo);
    }
    this.setState({
      pokemons,
    });
  };

  selectPokemon = (cardInfo) => {
    this.setState({
      pokemonSelected: cardInfo,
    });
  };

  PrevNextPokemon = (action) => {
    let newPokemonSelected = this.state.pokemonSelected;
    const currentNumber = this.state.pokemonSelected.number;
    if (action === "next" && currentNumber < this.numPokemons) {
      newPokemonSelected = this.state.pokemons.filter(
        (pokemon) => pokemon.number === currentNumber + 1
      )[0];
    } else if (action === "prev" && currentNumber > 1) {
      newPokemonSelected = this.state.pokemons.filter(
        (pokemon) => pokemon.number === currentNumber - 1
      )[0];
    }
    this.setState({
      pokemonSelected: newPokemonSelected,
    });
  };

  render() {
    return (
      <div id="PrincipalPage">
        <Card
          pokemonSelected={this.state.pokemonSelected}
          PrevNextPokemon={this.PrevNextPokemon}
        />
        <PokemonList
          pokemons={this.state.pokemons}
          selectPokemon={this.selectPokemon}
        />
      </div>
    );
  }
}
