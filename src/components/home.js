import "../App.css";
import getPokemon from "./Pokedex";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});

async function handleClick (){
    const pokemonResponse = await getPokemon(1);
    setPokemon(pokemonResponse);
    console.log(pokemon);
}

useEffect(() => {
    handleClick();
}, []);

  return (
    <div className="App">
      <button onClick={handleClick} > Pokemon </button>
      {pokemon && (<img src={pokemon.sprites.other["official-artwork"].front_default} />)}
    </div>
  );
}

export default App;
