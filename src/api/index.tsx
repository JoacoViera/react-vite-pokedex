import axios from "axios";

interface QueryParams {
  pageParam?: number;
  queryKey: [string, number | string];
}

const getPokemon = async (params: QueryParams) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.queryKey[1]}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

const getPokemonsList = async (params: QueryParams) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${params.queryKey[1]}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

export { getPokemon, getPokemonsList };
