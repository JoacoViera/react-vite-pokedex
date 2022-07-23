import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import PokemonPage from "./Pages/PokemonPage";
import ListPokemonsPage from "./Pages/ListPokemonsPage";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="bg-slate-900 h-screen">
				<BrowserRouter>
					<nav className="bg-white border-gray-200 dark:bg-gray-900">
						<div className="justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
							<Link
								to="react-vite-pokedex/"
								className="flex items-center"
							>
								<img
									src="../assets/pokedex.png"
									className="mr-3 h-6 sm:h-9"
									alt="Pokedex Logo"
								/>
								<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
									Pokedex
								</span>
							</Link>
							<button
								data-collapse-toggle="navbar-default"
								type="button"
								className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
								aria-controls="navbar-default"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</nav>
					<nav className="bg-gray-50 dark:bg-gray-700">
						<div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
							<div
								className="hidden w-full md:block md:w-auto"
								id="navbar-default"
							>
								<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
									<Link to="react-vite-pokedex/">
										<p className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
											List
										</p>
									</Link>
									<Link to="react-vite-pokedex/search">
										<p className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
											Search
										</p>
									</Link>
								</ul>
							</div>
						</div>
					</nav>

					<div className="flex flex-col justify-center items-center">
						<Routes>
							<Route
								path="react-vite-pokedex"
								element={<ListPokemonsPage />}
							/>
							<Route
								path="react-vite-pokedex/search"
								element={<PokemonPage />}
							/>
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	);
}

export default App;
