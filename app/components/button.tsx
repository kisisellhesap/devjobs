import React from "react";

interface ButtonProps {
  text: string;
  buttonStyle?: 1 | 2 | 3;
}
const Button = ({ text, buttonStyle }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-3 rounded-md text-preset-4  cursor-pointer h-fit  outline-none ${
        buttonStyle === 1
          ? "bg-Indigo-500 hover:bg-Indigo-300 text-Neutral-0"
          : buttonStyle === 2
          ? "bg-Indigo-500/10 hover:bg-Indigo-500/35 text-Indigo-500"
          : "bg-Neutral-0/10 hover:bg-Neutral-0/25 text-Neutral-0"
      }`}
    >
      {" "}
      {text}
    </button>
  );
};

export default Button;
