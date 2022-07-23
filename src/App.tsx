import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonPage from "./Pages/PokemonPage";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex justify-center items-center bg-slate-900 h-screen">
				<PokemonPage />
			</div>
		</QueryClientProvider>
	);
}

export default App;
