import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Pokemon.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonDescription, setPokemonDescription] = useState([]);



  useEffect(() => {
    getPokemon();
  }, []);

  function avancaPokemon() {
    setPokemon(pokemon + 1);
  }
  function voltaPokemon() {
    setPokemon(pokemon - 1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    const toArray2 = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
      const res = await axios.get(url);
      const res2 = await axios.get(url2);
      toArray.push(res.data);
      toArray2.push(res2.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      setPokemonDescription(res2.data.flavor_text_entries[0].flavor_text);
      

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="pokemon-card">
      {pokemonData.map((data) => {
        return (
          <div>
            <div>
              <div className="pokemon-name-type">
                <h2 className="pokemon-name">{data.name}</h2>
                <h2 className="pokemon-type">Tipo:{pokemonType}</h2>
              </div>
              <div>
                <img
                  src={data.sprites.other["official-artwork"].front_default}
                  alt="Sprite"
                  className="pokemon-image"
                />
              </div>

              <p className="pokemon-description">DESCRIÇÃO</p>
            <div className="pokemon-description-p">
              <p>{pokemonDescription}</p>
            </div>
            </div>

            <p className="pokemon-golpes">GOLPES</p>
            <div className="pokemon-golpes-li">
                <p>{data.moves[0].move.name}</p>
                <p>{data.moves[1].move.name}</p>
                <p>{data.moves[2].move.name}</p>
                <p>{data.moves[3].move.name}</p>
            </div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} className="buttons">
        <button
          onClick={pokemon < 1 ? setPokemon(898) : voltaPokemon}
          className="button1"
        >
          Anterior
        </button>
        <p>{pokemon.name}</p>
        <button
          onClick={pokemon > 898 ? setPokemon(1) : avancaPokemon}
          className="button2"
        >
          Próximo
        </button>
      </form>
    </div>
  );
};

export default Pokemon;
