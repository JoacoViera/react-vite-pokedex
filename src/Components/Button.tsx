import React from "react";

interface ButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
}

export default function Button({
  onClick = () => {},
  title = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      className="min-w-[10%] text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
