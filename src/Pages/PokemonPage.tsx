import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import getPokemon from "../api/index";

function PokemonPage() {
	const [pokemonName, setPokemonName] = useState("charmander");
	const { data, isLoading, refetch, isError } = useQuery(
		["GET_POKEMON", pokemonName],
		async () => getPokemon(pokemonName),
		{
			onSuccess: (result) => {
				console.log("result", result);
			},
			onError: (error) => {
				console.log("error pa", error);
			},
			enabled: false,
		}
	);
	useEffect(() => {
		refetch();
	}, []);

	const handleInput = (event: any) => {
		const { name, value } = event.target;
		if (name === "pokemon-name") {
			setPokemonName(value);
		}
	};

	if (isLoading || isError) {
		return <h1 className="text-white text-lg">LOADING...</h1>;
	}
	return (
		<div className="flex flex-col justify-center items-center w-2/5 p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<img
				className="w-90 h-30"
				src={data.sprites.front_default}
				alt=""
			/>
			<h4 className="underline self-start mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
				Name:
			</h4>
			<p className="self-start font-normal text-gray-700 dark:text-gray-400 mb-10 ">
				{data.name}
			</p>
			<h3 className="underline self-start mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
				Abilities:
			</h3>
			{data.abilities.map((element: any) => (
				<p
					key={element.ability.name}
					className="self-start mb-3 font-normal text-gray-700 dark:text-gray-400"
				>
					{element.ability.name}
				</p>
			))}

			<form className="mt-4 w-full">
				<p className="mb-2 mt-4 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
					Search
				</p>
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
						className="block p-4 w-full pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Pokemon"
						required
						onChange={handleInput}
						name="pokemon-name"
					/>
					<button
						type="button"
						className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={() => refetch}
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}

export default PokemonPage;
