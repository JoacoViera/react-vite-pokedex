import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getPokemon } from "../api/index";

export default function PokemonCard({ id }: any) {
  const { data, isLoading, isError } = useQuery(
    ["GET_POKEMONS", id],
    getPokemon,
    {}
  );
  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  if (isLoading || isError) return <h1>Loading...</h1>;
  return (
    <div
      key={data.name}
      className="mt-20 self-center p-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-5"
    >
      <img
        className="w-36 h-36 rounded"
        src={data?.sprites?.front_default}
        alt="Extra large avatar"
      />
      <h1 className="text-center text-white">{capitalize(data.name)}</h1>
    </div>
  );
}
