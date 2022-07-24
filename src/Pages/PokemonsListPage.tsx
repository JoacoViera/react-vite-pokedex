import React, { useState } from "react";
import { PokemonCard, Button } from "../Components";
import { range } from "../utils";

export default function ListPokemonsPage() {
  const [pageSide, setPageSide] = useState(20);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(20);

  const nextPage = () => {
    setFrom(to);
    setTo(to + pageSide);
  };

  const prevPage = () => {
    setFrom(from - pageSide);
    setTo(to - pageSide);
  };

  const handleInput = (event: any) => {
    if (event.target.value !== "Page side") {
      const newValue = parseInt(event.target.value, 10);
      setPageSide(newValue);
      setFrom(0);
      setTo(newValue);
    }
  };

  return (
    <div className="flex flex-col bg-slate-900">
      <div className="flex flex-row justify-between items-center mx-20 mb-2">
        <Button
          disabled={from - pageSide < 0}
          title={`Previous ${pageSide}`}
          onClick={prevPage}
        />
        <select
          id="pageSide"
          className="min-w-[10%] self-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInput}
          defaultValue="Page side"
        >
          <option>Page side</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <Button
          title={`Next ${pageSide}`}
          onClick={nextPage}
          disabled={to + pageSide > 900}
        />
      </div>

      <div className="flex flex-row flex-wrap bg-slate-900 justify-center pb-20">
        {range(from, to).map((id: any) => (
          <PokemonCard key={id} id={id + 1} />
        ))}
      </div>
    </div>
  );
}
