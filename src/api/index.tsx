import axios from "axios";

const getPokemon = async ({ queryKey }: any) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${queryKey[1]}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

const getPokemonsList = async ({ queryKey }: any) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${queryKey[1]}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

export { getPokemon, getPokemonsList };
