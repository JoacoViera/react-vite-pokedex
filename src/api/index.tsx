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

export default getPokemon;
