import axios from "axios";

const getPokemon = async (pokemon: string) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		return null;
	}
};

export default getPokemon;
