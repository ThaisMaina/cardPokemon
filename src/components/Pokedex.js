import axios from "axios";

async function getPokemon(number) {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getPokemon;
