import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPokemon } from "../api";
import { Button, Spinner } from "../Components";
import { capitalize } from "../utils";

function PokemonDetailsPage() {
  const [pokemonName, setPokemonName] = useState<number | string>("charmander");
  const [search, setSearch] = useState("");
  const { data, isLoading, refetch, isError } = useQuery(
    ["GET_POKEMON", pokemonName],
    getPokemon,
    {
      onSuccess: (successData) => {
        if (successData?.count > 1) {
          const randomIndex = Math.floor(Math.random() * 900);
          setPokemonName(randomIndex);
        }
      },
    }
  );

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    if (name === "pokemon-name") {
      setSearch(value);
    }
  };

  if (isError || data?.length === 0) {
    return (
      <div className="flex flex-col">
        <h1 className="font-bold text-gray-900 dark:text-gray-400  ">
          Something goes wrong
        </h1>

        <Button
          title="Try Again"
          onClick={() => {
            setPokemonName("charmander");
            setSearch("");
            refetch();
          }}
        />
      </div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col w-max">
      <div className="mb-10">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-900 focus:border-blue-900 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900"
            placeholder="Search Pokemon"
            onChange={handleInput}
            name="pokemon-name"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={search.length < 2}
            onClick={() => {
              setPokemonName(search.toLocaleLowerCase());
              setSearch(search);
              refetch();
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col w-max bg-slate-900 items-center p-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          width="250"
          height="250"
          className="rounded-t-lg"
          src={data?.sprites?.front_default}
          alt="pokemon-sprite"
        />
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
          Name:
        </h4>
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-10 ">
          {capitalize(data?.name)}
        </p>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
          Abilities:
        </h3>
        <div className="flex flex-wrap">
          {data &&
            data?.abilities?.map((element: any) => (
              <p
                key={element.ability.name}
                className="mr-3 font-normal text-gray-700 dark:text-gray-400"
              >
                {`${element.ability.name}`}
              </p>
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          title="Random"
          onClick={() => {
            setPokemonName("");
            setSearch(search);
            refetch();
          }}
        />
      </div>
    </div>
  );
}

export default PokemonDetailsPage;
