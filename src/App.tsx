import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { PokemonDetailsPage, PokemonsListPage } from "./Pages";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col bg-slate-900 h-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
              <Link to="react-vite-pokedex/" className="flex items-center">
                <img
                  src="https://img.icons8.com/color/480/pokedex.png"
                  className="mr-3 h-6 sm:h-9"
                  alt="Pokedex Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Pokedex
                </span>
              </Link>
            </div>
          </nav>
          <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
              <div className="flex items-center">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
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

          <div className="flex flex-col justify-center items-center flex-grow">
            <Routes>
              <Route path="react-vite-pokedex" element={<PokemonsListPage />} />
              <Route
                path="react-vite-pokedex/search"
                element={<PokemonDetailsPage />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
