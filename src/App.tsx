import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex items-center bg-black h-screen justify-center">
				<h1 className="text-white text-3xl font-bold underline">
					Hello world!
				</h1>

				<div />
			</div>
		</QueryClientProvider>
	);
}

export default App;
